import { Component, computed, signal } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { PriceCard } from '../../components/price-card/price-card';
import { DishItem } from '../../interfaces/DishItem';
import { SubmenuCard } from '../../components/submenu-card/submenu-card';

const list = [
  {
    id: 1,
    img: '/menu/category/kingAhorro/americana.png',
    name: 'Americana 1',
    price: '20',
    subMenu: [
      {
        id: 1,
        name: 'opcion 1',
        price: 10,
      },
      {
        id: 2,
        name: 'opcion 2',
        price: 100,
      },
      {
        id: 3,
        name: 'opcion 3',
        price: 1000,
      },
    ],
  },
  {
    id: 2,
    img: '/menu/category/kingAhorro/americana.png',
    name: 'Americana 2',
    price: '40',
    subMenu: [
      {
        id: 1,
        name: 'opcion 11',
        price: 10,
      },
      {
        id: 2,
        name: 'opcion 22',
        price: 100,
      },
      {
        id: 3,
        name: 'opcion 33',
        price: 1000,
      },
    ],
  },
  {
    id: 3,
    img: '/menu/category/kingAhorro/americana.png',
    name: 'Americana 3',
    price: '15',
    subMenu: [
      {
        id: 12,
        name: 'opcion 12',
        price: 10,
      },
      {
        id: 2,
        name: 'opcion 22',
        price: 100,
      },
      {
        id: 3,
        name: 'opcion 32',
        price: 1000,
      },
    ],
  },
];
@Component({
  selector: 'app-menu-category',
  imports: [PriceCard, SubmenuCard],
  templateUrl: './menu-category.html',
  styleUrl: './menu-category.css',
})
export default class MenuCategory {
  listMenu = signal<DishItem[]>(list);
  selectedId = signal<number | null>(1);

  selectedOptionId = signal<number | null>(null);
  selectedSubMenu = computed(() => {
    return this.listMenu().find((item) => item.id === this.selectedId());
  });

  setSelectedCard(id: number) {
    this.selectedId.set(id);
    this.selectedOptionId.set(null);
  }

  changeOption(id: number) {
    this.selectedOptionId.set(id);
  }
}
