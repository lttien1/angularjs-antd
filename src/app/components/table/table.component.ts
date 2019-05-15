import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() columns;

  mapOfCheckedId: { [key: string]: boolean } = {};
  private pageSize = 20;

  constructor() { }

  ngOnInit() {
  }
  currentPageDataChange($event): void {}
  refreshStatus(): void {}
  checkAll(): void {}
  sort(sort: { key: string; value: string }): void {}
}
