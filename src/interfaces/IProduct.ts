export interface IProduct {
  name: string;
  buy_price: number;
  sell_price: number;
  image?: string;
  stock?: number;
}

export interface IProductFormResponse {
  msg: string[];
  success: boolean;
}
