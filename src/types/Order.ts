export interface Order {
  _id: string;
  table: string;
  client: string;
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  total: number;
  createdAt: Date;
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
  }[];
}
