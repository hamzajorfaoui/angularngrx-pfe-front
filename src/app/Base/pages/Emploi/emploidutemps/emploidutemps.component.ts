import  CustomStore  from 'devextreme/data/custom_store';
import { EmploiService } from './../emploi.service';
import { FiliereService } from './../../filiere/filiere.service';
import { Component, OnInit } from '@angular/core';



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
    this.filS.getfiliere().then(
      data=>{
       for (const filiere of data["data"]) {
        this.Filieres.push(
          { name:filiere.name+" "+filiere.niveau , 
            niveau:filiere.niveau,
            id:filiere.id    
          }) ;
       }
      }
    );
    this.emploidutemps = new CustomStore({
      key:'id',
      load:()=>this.EmpS.getemploidutemps()
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
        this.semestre = this.date > 1 ? {id:1 , value:"S3"}:{id:2 , value:"S4"}
      break;
    case 3:
        this.semestre = this.date > 1 ? {id:1 , value:"S5"}:{id:2 , value:"S6"}
      break;
    default:
      this.semestre ={id:0,value:""}
      break;
  }
  }
  
  onFormSubmit = (e) => {  
    e.preventDefault();
    this.EmpS.addemploidutemps(this.dataSource).subscribe(data=>{
    this.dataSource.emploiImage=[];
    this.OtherImages = [];
    })
  } 
}
 