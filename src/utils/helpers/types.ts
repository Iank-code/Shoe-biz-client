export interface ProductType {
  id: string;
  name: string;
  description: string;
  newPrice: string;
  oldPrice?: string;
  images: string[];
  tag: string[];
  shoeSize: string[];
}

export interface userOrderType {
  status: Number;
  message: string;
  customers: number;
  orders: number;
  products: number;
}
