export interface ProductType {
  id: string;
  name: string;
  description: string;
  newPrice: string;
  oldPrice?: string;
  images: string[];
  tag: string[];
  shoeSize: string[];
  colorVariants: colorVariant[]
}

export interface userOrderType {
  status: Number;
  message: string;
  customers: number;
  orders: number;
  products: number;
}

export interface colorVariant {
  color: String,
  price: String,
  image: String,
}
