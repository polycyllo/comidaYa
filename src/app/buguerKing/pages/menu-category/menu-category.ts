import { Component, signal } from '@angular/core';
import { MenuCategoryCards } from '../../components/menu-category-cards/menu-category-cards';
import { MenuItem } from '../../interfaces/MenuItem';
import { MenuCard } from '../../components/menu-card/menu-card';
import { MenuProduct } from '../../interfaces/MenuProduct';
import { MENU_PRODUCTS } from '../../data/menu-products.data';

interface MenuCategoryItem extends MenuItem {
  id: string;
}

@Component({
  selector: 'app-menu-category',
  imports: [MenuCategoryCards, MenuCard],
  templateUrl: './menu-category.html',
})
export default class MenuCategory {
  readonly categories = signal(MENU_CATEGORY_ITEMS);
  readonly products = signal(MENU_PRODUCTS);

  productsFor(categoryId: string): MenuProduct[] {
    return this.products().filter((product) => product.categoryId === categoryId);
  }
}
const MENU_CATEGORY_ITEMS: MenuCategoryItem[] = [
  {
    id: 'combos-parrilla',
    title: 'Combos a la Parrilla',
    img: 'combos-a-la-parrilla.svg',
  },
  {
    id: 'combos-pollo',
    title: 'Combos de Pollo',
    img: 'combos-de-pollo.svg',
  },
  {
    id: 'hamburguesas-sueltas',
    title: 'Hamburguesas Sueltas',
    img: 'hamburguesas-sueltas.svg',
  },
  {
    id: 'king-jr',
    title: 'King Jr.',
    img: 'king-jr.png',
  },
  {
    id: 'king-duo',
    title: 'King Duo',
    img: 'king-duo.svg',
  },
  {
    id: 'acompanamientos',
    title: 'Acompañamientos',
    img: 'acompanamientos.svg',
  },
  {
    id: 'postres',
    title: 'Postres',
    img: 'postres.svg',
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    img: 'ensaladas.svg',
  },
  {
    id: 'cupones',
    title: 'Cupones',
    img: 'cupones.png',
  },
  {
    id: 'promociones',
    title: 'Promociones',
    img: 'promociones.png',
  },
];
