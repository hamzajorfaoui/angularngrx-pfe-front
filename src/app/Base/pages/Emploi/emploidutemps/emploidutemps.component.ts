import { DxDataGridComponent } from 'devextreme-angular';
import  CustomStore  from 'devextreme/data/custom_store';
import { EmploiService } from './../emploi.service';
import { FiliereService } from './../../filiere/filiere.service';
import { Component, OnInit, ViewChild } from '@angular/core';



export interface emploidutemps{
  emploiImage:any[],
  FiliereId:number,
  SemestreId:String
}

@Component({
  selector: 'app-emploidutemps',
  templateUrl: './emploidutemps.component.html',
  styleUrls: ['./emploidutemps.component.scss']
})
export class EmploidutempsComponent implements OnInit {

  buttonOptions: any = {
    text: "Ajouter une actualité",
    type: "success",
    useSubmitBehavior: true
  }
  dataSource:emploidutemps;
  constructor(private filS: FiliereService , private EmpS:EmploiService) { 
    this.dataSource = {
      emploiImage: [],
      FiliereId:null,
      SemestreId:null
    }
  }
  Filieres = [];
  semestre={
    id:0,
    value:"" 
  }
  loading=false;
  emploidutemps;
  ngOnInit() {
    this.emploidutemps = new CustomStore({
      key:'id',
      load:()=>this.EmpS.getemploidutemps().then(data=>
        {this.filiereselectvalue(data); return data;})
    });
  }
  filiereselectvalue(emplois){
    this.filS.getfiliere()
    .then(data=>{
       return data["data"].map(d=> { return {name:d.name+" "+d.niveau , 
                                             niveau:d.niveau,
                                             semestre:this.Selectsemestre(d.niveau),
                                             id:d.id}     
       });
    }).then(data=>{
          var dis =(d)=>{
            var disab = false;
              emplois.forEach(e => {
                if(e.fillier == d.name && e.semester == d.semestre){
                disab=true;
                }
              });
                return disab
              } 
          this.Filieres = data.map(d=>{
            return {...d,disabled:dis(d)}
          });
          });
  }

  OtherImages :any[] = [];
  previewFiles =async ()=>{
    if(this.dataSource){
      if(this.dataSource.hasOwnProperty('emploiImage') ){
       
          if(this.dataSource.emploiImage.length > 0){ 
           this.OtherImages = [];
          //  this.OtherImagesFile = this.dataSource.OtherImages;
           var files    = this.dataSource.emploiImage;
           var readAndPreview = (file)  => {
           var reader  = new FileReader();
          reader.onloadend =() => {
            this.OtherImages.push(reader.result);  
          }
          reader.readAsDataURL(file);
          }
          if (files) {
            [].forEach.call(files,  readAndPreview);
          }
          }else{
            this.OtherImages = [];
            // this.OtherImagesFile  = [];
          }
     
          }else{
  
          }
   }}
  newimageFile = null;
  previewNewfile=async (e)=>{
    console.log(this.emploidutemps)
   console.log(e.value) 
    this.newimageFile = e.value;
    var reader  = new FileReader();
    reader.addEventListener("load",  () => {
      var image = new Image();
      image.src = String(reader.result);
      image.onload = () =>{
        this.imageSelected = [];
        this.imageSelected.push(reader.result);  
    };
    }, false);
   if (this.newimageFile ) {
    reader.readAsDataURL(this.newimageFile[0] )
   }
   
  }
  changefiliere = (e)=>{
    this.Selectsemestre(e.selectedItem.niveau);
  }
  date = 0;
  Selectsemestre(niveau){
  switch (niveau) {
    case 1:
      this.semestre = this.date > 1 ? {id:1 , value:"S1"}:{id:2 , value:"S2"}
      break;
    case 2:
        this.semestre = this.date > 1 ? {id:2 , value:"S3"}:{id:3 , value:"S4"}
      break;
    case 3:
        this.semestre = this.date > 1 ? {id:4 , value:"S5"}:{id:5 , value:"S6"}
      break;
    default:
      this.semestre ={id:0,value:""}
      break;
  }
  return this.semestre.value;
  }
  @ViewChild('targetDataGrid', { static: false }) dataGrid: DxDataGridComponent;
  onFormSubmit = (e) => {  
    this.loading = true;
    e.preventDefault();
    this.EmpS.addemploidutemps(this.dataSource).subscribe(data=>{
    this.OtherImages = [];
    this.dataSource.emploiImage=[];
    this.loading = false;
    this.dataGrid.instance.refresh();
    })
  } 
  imageSelected = []; 
  emploiselected = null;
  onUpdate(e){
    this.emploiselected = e.data;
    this.imageSelected = [] ; 
    this.imageSelected.push("http://127.0.0.1:8000"+e.data.temp);
  }

  onEditorPreparing(e) {
    if(e.dataField === "newtemp") {
      
            e.editorName = "dxFileUploader";  
            e.editorOptions = {
              uploadMode : "useButtons",
              multipe:false,
              accept:'image/*',
              uploadFile :(args)=>{
                this.EmpS.updateemploidutemp(this.emploiselected.id , args.value).subscribe(
                  data=>{
                    this.dataGrid.instance.refresh();
                    this.imageSelected = [] ; 
                  }
                )
              },
              onValueChanged:(args)=>{
                this.previewNewfile(args);
              }
            }    
     }
}
}
   