import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-split-pane',
  templateUrl: './split-pane.component.html',
  styleUrls: ['./split-pane.component.css']
})
export class SplitPaneComponent implements OnInit {

  @Input() templateLeft: TemplateRef<any>;
  @Input() templateRight: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
}
