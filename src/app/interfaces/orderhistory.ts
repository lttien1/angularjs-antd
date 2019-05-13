interface Status {
  id: string;
  value: string;
  color: string;
}

export interface OrderHistory {
  createdTime: Date;
  orderCode: string;
  orderId: string;
  status: Status;
}
