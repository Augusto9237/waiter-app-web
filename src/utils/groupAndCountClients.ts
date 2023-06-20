import { Order } from "../types/Order";

export function groupAndCountClients(data: Order[]): {
  [key: string]: number;
  length: number;
} {
  const result: { [key: string]: number } = {};
  if (data.length > 0) {
    for (const item of data) {
      if (!result[item.client]) {
        result[item.client] = 1;
      } else {
        result[item.client]++;
      }
    }
  }
  return { ...result, length: Object.keys(result).length };
}
