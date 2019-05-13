interface Status  {
  customerId: string;
  status: string;
  updatedTime: Date;
  createdTime: Date;
}

export interface Hotline {
  expiredTime: Date;
  id: string;
  index: number;
  name: string;
  network: string;
  status: string;
  statuses: Array<Status>;
  viewOnly: boolean;
}