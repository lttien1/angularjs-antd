interface Sort {
  default: boolean;
  id: string;
  value: string;
}

export interface Filter {
  page: number;
  pageSize: number;
  search: Array<any>;
  sort: Array<Sort>;
}
