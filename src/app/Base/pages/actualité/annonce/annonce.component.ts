import { DxDataGridComponent, DxFormComponent } from 'devextreme-angular';
import  CustomStore  from 'devextreme/data/custom_store';
import { ActualiteService } from './../actualite.service';
import { map } from 'rxjs/operators';
import { EtudiantService } from './../../etudiant/etudiant.service';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';

export interface actualite  {
      dept:any[],
      OtherImages:any[],
      image:any[],
      title:"",
      contenu:""

}


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit , OnChanges  {

  constructor(private service:EtudiantService , private ACS:ActualiteService) { 
    this.dataSource = {
      OtherImages: [],
      image:[],
      contenu:"",
      title:"",
      dept:[]
    }
  }

  Actualites;
  ActualitesData;
  ngOnInit() {
    this.Actualites = new CustomStore({
      key:'id',
      load:()=>this.ACS.getactualites().then(data=>{
        this.ActualitesData = data;
        this.getis_active( 18);
        return data;
      }),
      update:(key , values)=> this.ACS.updateactualite(key , values),
      remove:(key) =>this.ACS.removeactualite(key)
    })
    this.service.getdeptfiliere()
    .subscribe(
      data=>{
        for (const d of data) {
          d.selectedItems = [];
        }
        this.dataSource.dept = data;
      }
    )
  }
  getis_active(id){
  return this.ActualitesData.filter(e=>e.id == id)[0].is_active;
  }

  // selectedItems: any[] = [];
  loading=false;
  deleteType: string = "toggle";
  buttonOptions: any = {
    text: "Ajouter une actualité",
    type: "success",
    useSubmitBehavior: true
  }
  dataSource :actualite;
  idfiliereS : any[] = [];
  @ViewChild('targetDataGrid', { static: false }) dataGrid: DxDataGridComponent;
  @ViewChild('formtarget', { static: false }) formtarget: DxFormComponent;
  
  value: any[] = [];
  onFormSubmit = (e) => {  
    this.idfiliereS= [];
    new Promise(
      (resolve, reject) =>{
      for (const SI of this.dataSource.dept[0].selectedItems) {
        this.idfiliereS.push(SI.id);
      }
    resolve();
    })
    .then(
      ()=>{
    if(this.idfiliereS.length > 0){
    this.loading=true;
    this.ACS.addactualite(this.dataSource.title , this.dataSource.contenu , this.idfiliereS , this.imageprincipaleFile , this.OtherImagesFile)
              .subscribe(
              data=>{
              this.loading=false;
              this.dataGrid.instance.refresh();   
              this.formtarget.instance.resetValues();    
              // this.dataSource.title = undefined;
              // this.dataSource.contenu = undefined;
              this.dataSource.dept[0].selectedItems = [];
              // this.dataSource.OtherImages = [];
              // this.dataSource.image = [];
              this.imageprincipale = null;
              this.imageprincipaleFile = null;
              this.OtherImages = [];

              },(e)=>{console.log(e); this.loading=false;})
    }else{}
    });
    e.preventDefault();
  }

    imageprincipale :any[] = [];
    imageprincipaleFile = null;
    imagewidth;
    imageheight;
    previewFile = ()=> {

    if(this.dataSource){
        if(this.dataSource.hasOwnProperty('image') ){
            if(this.dataSource.image.length > 0){

            this.imageprincipale=[];
            this.imageprincipaleFile = this.dataSource.image[0];
            var file    = <File>this.dataSource.image[0];
            var reader  = new FileReader();

            reader.addEventListener("load",  () => {
              this.imageprincipale.push(reader.result);
            //   var image = new Image();
            //   image.src = String(reader.result);
            //   image.onload = () =>{
            //     this.imageprincipale.push(reader.result);
            //     // if(image.width > 300){
            //     //   this.imagewidth = 300;
            //     // }else{
            //     //   this.imagewidth = image.width;
            //     // }

            //     // if(image.height > 340){
            //     //   this.imageheight = 340;
            //     // }else{
            //     //   this.imageheight = image.height;
            //     // }
            // };
            }, false);

            if (file) {
              reader.readAsDataURL(file);
            }
            }else{
              this.imageprincipale = [];
              this.imageprincipaleFile = null;
            }
      
            }else{

            }
    }
    }

OtherImages :any[] = [];
OtherImagesFile :any[] = [];
previewFiles =async ()=>{
  if(this.dataSource){
    if(this.dataSource.hasOwnProperty('OtherImages') ){
     
        if(this.dataSource.OtherImages.length > 0){ 
         this.OtherImages = [];
         this.OtherImagesFile = this.dataSource.OtherImages;
         var files    = this.dataSource.OtherImages;
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
          this.OtherImagesFile  = [];
        }
   
        }else{

        }
 }
}
onRowPrepared = (e)=>{
  if (e.rowType == 'data' && e.data.is_active == 0) {  
    e.rowElement.style.backgroundColor = '#ffdce0';   
  }  
}

ngOnChanges() {
  console.log("test");
}
popupVisible = false;
idActualiteCancel = 0;
annuler(id){
console.log(id);
this.idActualiteCancel = id;
this.popupVisible = true;
}
annuleryes =()=>{
  this.ACS.cancelactualite(this.idActualiteCancel).subscribe(
    data=>{
      this.popupVisible = false;
      this.dataGrid.instance.refresh();
    })
}
annulerno=()=>{
this.popupVisible = false;
this.idActualiteCancel = 0;
}


}
