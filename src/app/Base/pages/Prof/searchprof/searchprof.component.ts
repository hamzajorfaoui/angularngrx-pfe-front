import { ProfService } from './../prof.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-searchprof',
  templateUrl: './searchprof.component.html',
  styleUrls: ['./searchprof.component.scss']
})
export class SearchprofComponent implements OnInit {

  constructor(private PS:ProfService) {
    //this.logOption = this.logOption.bind(this)
   }

  ngOnInit() {
  }
  Professeurs;
  onValueChanged(e) {
    if(e.value.trim() != "" ){
      this.PS.searchprof(e.value).subscribe(
      data=>{
        console.log(data)
        this.Professeurs = data['data'];
      }
    )
    }else{
      this.Professeurs = []
    }
    
}
onclicklist =function(e){
  console.log(e.itemData.id)
}
previewfile(filesender){


  var files  =  (document.querySelector('input[type=file]')as HTMLInputElement).files;

  var readAndPreview = (file)=>{
        var reader = new FileReader();
      reader.onload = ()=>{
        console.log(reader.result);
      //   const result = this.excelToJson({
      //     sourceFile: "‪test.xlsx",
      //     columnToKey: {
      //         A: 'name',
      //         B: 'lastname' 
      //     }
      // });
      
      }
      reader.readAsDataURL(file);
  }

 
 
 
 [].forEach.call(files, readAndPreview);


}

}
