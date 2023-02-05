export interface Order {
  _id: string;
  table: string;
  clerk: {
    _id: string;
    name: string;
    office: "CLERK";
  };
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
