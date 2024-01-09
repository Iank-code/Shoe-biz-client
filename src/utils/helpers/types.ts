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
