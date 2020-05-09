import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.scss']
})
export class PortletComponent implements OnInit {

  @Input() titre :String;
  constructor() { }

  ngOnInit() {
  }

}
