import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  private contactAndFields;

  ngOnInit() {
    this.contactService.getContactAndFields().subscribe((data) => {
      // console.log('^^^^^^^^^^^^^^', data);
      this.contactAndFields = data;
    });
  }
}
