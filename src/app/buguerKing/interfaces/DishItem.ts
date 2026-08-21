export interface DishItem {
  id: number;
  img: string;
  name: string;
  price: string;
  subMenu: SubMenu[];
}

export interface SubMenu {
  id: number;
  name: string;
  price: number;
}
