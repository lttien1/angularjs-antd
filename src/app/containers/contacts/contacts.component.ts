import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { ContactResponse, Field, SearchResult } from 'src/app/interfaces';
import { SearchFilter } from 'src/app/interfaces/searchfilter';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  // private contactAndFields;
  private tableData: SearchResult;
  private tableFields: Array<Field> = [];

  ngOnInit() {
    this.contactService.getContactAndFields().subscribe((data: ContactResponse) => {
      this.tableData = data.searchResult;
      this.tableFields = data.tableFields.filter(field => field.show);
    });
  }
}
