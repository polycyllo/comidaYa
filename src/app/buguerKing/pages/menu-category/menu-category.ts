import { Component, signal } from '@angular/core';
import { MenuCategoryCards } from '../../components/menu-category-cards/menu-category-cards';
import { MenuCard } from '../../components/menu-card/menu-card';
import { MenuProduct } from '../../interfaces/MenuProduct';
import { MENU_PRODUCTS } from '../../data/menu-products.data';
import { MENU_CATEGORY_ITEMS } from '../../data/menu-category-items.data';

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
