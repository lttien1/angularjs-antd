import { Field } from './field';

interface Search {
  createdTime: Date;
  default: boolean;
  fields: Array<Field>;
  id: string;
  name: string;
  updatedTime: Date;
}

export interface SearchFilter {
  default: Search;
  filter: Array<Search>;
}
