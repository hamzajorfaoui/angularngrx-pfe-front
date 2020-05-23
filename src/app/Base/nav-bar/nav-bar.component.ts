import { LoginserviceService } from './../../LoginPage/loginservice.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private LS:LoginserviceService) { }
  @Input() asidebar_closed;
  ngOnInit() {
    console.log(this.asidebar_closed);
  }
  @Output() toggle_s: EventEmitter<any> = new EventEmitter();
  toggle_sidebar(){
    this.asidebar_closed = this.asidebar_closed == 0 ? 1:0;
    this.toggle_s.emit(this.asidebar_closed);
  }
  logout(){
   this.LS.logout();
  }
}
