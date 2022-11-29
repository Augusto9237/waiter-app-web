import { Order } from "../types/Order";

export const orders: Order[] = [
  {
    _id: "6372e48cbcd195b0d3d0f7f3",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath:
            "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-00.jpg",
          price: 40,
        },
        quantity: 3,
        _id: "6372e48cbcd195b0d3d0f7f4",
      },
      {
        product: {
          name: "Coca cola",
          imagePath:
            "https://thumbs.dreamstime.com/b/lata-da-coca-cola-18774340.jpg",
          price: 7,
        },
        quantity: 2,
        _id: "6372e48cbcd195b0d3d0f7f5",
      },
    ],
  },
];
