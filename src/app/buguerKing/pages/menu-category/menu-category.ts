import { Component, signal } from '@angular/core';
import { MenuCategoryCards } from "../../components/menu-category-cards/menu-category-cards";
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
  selector: 'app-menu-category',
  imports: [MenuCategoryCards],
  templateUrl: './menu-category.html',
})
export default class MenuCategory {

  readonly categories = signal( MENU_CATEGORY_ITEMS)

}
const MENU_CATEGORY_ITEMS: MenuItem[] = [
  {
    title: 'Combos a la Parrilla',
    img: 'combos-a-la-parrilla.svg',
  },
  {
    title: 'Combos de Pollo',
    img: 'combos-de-pollo.svg',
  },
  {
    title: 'Hamburguesas Sueltas',
    img: 'hamburguesas-sueltas.svg',
  },
  {
    title: 'King Jr.',
    img: 'king-jr.png',
  },
  {
    title: 'King Duo',
    img: 'king-duo.svg',
  },
  {
    title: 'Acompañamientos',
    img: 'acompanamientos.svg',
  },
  {
    title: 'Postres',
    img: 'postres.svg',
  },
  {
    title: 'Ensaladas',
    img: 'ensaladas.svg',
  },
  {
    title: 'Cupones',
    img: 'cupones.png',
  },
  {
    title: 'Promociones',
    img: 'promociones.png',
  },
];