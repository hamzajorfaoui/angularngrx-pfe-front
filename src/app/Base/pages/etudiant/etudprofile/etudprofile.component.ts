import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from './../etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-etudprofile',
  templateUrl: './etudprofile.component.html',
  styleUrls: ['./etudprofile.component.scss']
})
export class EtudprofileComponent implements OnInit {
  etudiant;
  constructor(private etudeS:EtudiantService , private activeR:ActivatedRoute , private location:Location) { }
  loading = true;
  ngOnInit() {
    this.etudeS.getetudiant(this.activeR.snapshot.params['etudiantid']).subscribe(
      (data)=>{
        this.etudiant = data['data'];
        this.loading = false;
      }
    )
  }
  buttonOptions: any = {
    text: "Update",
    type: "success",
    useSubmitBehavior: true
}
  goback(){
    this.location.back();
  }
}
