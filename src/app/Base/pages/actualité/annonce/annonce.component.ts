import { DxDataGridComponent } from 'devextreme-angular';
import  CustomStore  from 'devextreme/data/custom_store';
import { ActualiteService } from './../actualite.service';
import { map } from 'rxjs/operators';
import { EtudiantService } from './../../etudiant/etudiant.service';
import { Component, OnInit, ViewChild  } from '@angular/core';

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
export class AnnonceComponent implements OnInit  {

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
  ngOnInit() {
    this.Actualites = new CustomStore({
      key:'id',
      load:()=>this.ACS.getactualites(),
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

  selectedItems: any[] = [];
  deleteType: string = "toggle";
  buttonOptions: any = {
    text: "Ajouter une actualité",
    type: "success",
    useSubmitBehavior: true
  }
  dataSource :actualite;
  idfiliereS : any[] = [];
  @ViewChild('targetDataGrid', { static: false }) dataGrid: DxDataGridComponent;
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

  this.ACS.addactualite(this.dataSource.title , this.dataSource.contenu , this.idfiliereS , this.imageprincipaleFile , this.OtherImagesFile)
            .subscribe(
            data=>{
            this.dataGrid.instance.refresh();       
            this.dataSource.title = undefined;
            this.dataSource.contenu = undefined;
            this.dataSource.dept[0].selectedItems = [];
            this.dataSource.OtherImages = [];
            this.dataSource.image = [];
            this.imageprincipale = null;
            this.imageprincipaleFile = null;
            this.OtherImages = [];
            },(e)=>{console.log(e)})
            

  }else{


  }
    })
   e.preventDefault();
 }
 imageprincipale :any = null;
 imageprincipaleFile = null;
 imagewidth;
 imageheight;
   previewFile = ()=> {

 if(this.dataSource){
    if(this.dataSource.hasOwnProperty('image') ){
        if(this.dataSource.image.length > 0){
        this.imageprincipaleFile = this.dataSource.image[0];
         var file    = <File>this.dataSource.image[0];
         var reader  = new FileReader();

        reader.addEventListener("load",  () => {
          var image = new Image();
          image.src = String(reader.result);
          image.onload = () =>{
          this.imageprincipale = reader.result;
            if(image.width > 300){
              this.imagewidth = 300;
            }else{
              this.imagewidth = image.width;
            }

            if(image.height > 250){
              this.imageheight = 250;
            }else{
              this.imageheight = image.height;
            }
        };
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
        }else{
          this.imageprincipale = null;
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
          // var image = new Image();
          // image.src = String(reader.result);
          this.OtherImages.push(reader.result);  
        //   image.onload = () =>{
        //   this.OtherImages.push(reader.result);  
        // };
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


}
