import { LoginserviceService } from './../../LoginPage/loginservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private LS:LoginserviceService) { }

  ngOnInit() {
  }
  logout(){
   this.LS.logout();
  }
}
