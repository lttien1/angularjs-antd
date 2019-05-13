import { OrderHistory } from './orderhistory';
import { Employee } from './employee';
import { Field } from './field';
import { Hotline } from './hotline';
import { SearchFilter } from './searchfilter';
import { Filter } from './filter';

export interface Contact {
  assignedEmployeeId: string;
  createdBy: string;
  createdTime: Date;
  crmNote: string;
  customFields: object;
  customerId: string;
  id: string;
  name: string;
  nameEn: string;
  orderHistory: Array<OrderHistory>;
  showCRM: boolean;
  updatedBy: string;
  updatedTime: Date;
}

interface Shop {
  id: string;
  forDemo: boolean;
}

interface SearchResult {
  contacts: Array<Contact>;
  total: number;
  filter: Filter;
}

export interface ContactResponse {
  defaultFieldOrders: Array<string>;
  employees: Array<Employee>;
  formFields: Array<Field>;
  hidePhone: boolean;
  hotlines: Array<Hotline>;
  orderFields: Array<Field>;
  searchFilter: SearchFilter;
  searchResult: SearchResult;
  shop: Shop;
  tableFields: Array<Field>;
}
