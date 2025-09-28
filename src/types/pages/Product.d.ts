type variant = {
  color: string;
  image: string;
  exa: string;
};
type desc = {
  title: string;
  desc: string;
  img?: string;
};
type c = {
  label: string;
  value: string;
};
export interface SingleProduct {
  id: string;
  price: number;
  desc: string;
  normalPrice: number;
  variants?: variant[];
  description: desc[];
  caract: c[];
}
