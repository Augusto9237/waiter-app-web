export interface ProductType {
  _id: string;
  name: string;
  description: string;
  category: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
}
