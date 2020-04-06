import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loadingpage',
  templateUrl: './loadingpage.component.html',
  styleUrls: ['./loadingpage.component.scss']
})
export class LoadingpageComponent implements OnInit , OnChanges{

  @Input() loading :boolean;
  @Input() idparent;

  load;
  constructor() { }

  ngOnInit() {
    this.load = this.loading;
    console.log(this.load);
  }
  ngOnChanges(){
    this.load = false;
    console.log(this.load)
  }

}
