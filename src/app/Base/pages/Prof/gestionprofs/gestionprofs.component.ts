import { ProfService } from './../prof.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionprofs',
  templateUrl: './gestionprofs.component.html',
  styleUrls: ['./gestionprofs.component.scss']
})
export class GestionprofsComponent implements OnInit {

  constructor(private profS:ProfService) { }

  ngOnInit() {
    this.profS.getprofs().subscribe(
      (data) =>{
        console.log(data)
      },
      (er)=>{
        console.log(er)
      }
    )
  }

}
