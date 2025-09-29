export type SingleCommand = {
  id: string;
  qte: number;
  color: string;
  desc: string;
  price: number;
  normalPrice: number;
  img: string;
};
export interface ShopContextProps {
  cart?: SingleCommand[];
  setCart: React.Dispatch<React.SetStateAction<SingleCommand[]>>;
  addToCart: (params: SingleCommand) => void;
  deleteFromCart: (id: string) => void;
}
