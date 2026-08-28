import { Component, signal } from '@angular/core';
import { MenuCategoryCards } from '../../components/menu-category-cards/menu-category-cards';
import { MenuCard } from '../../components/menu-card/menu-card';
import { MENU_SUBCATEGORIES, MenuSubcategory } from '../../data/menu-products.data';
import { MENU_CATEGORY_ITEMS } from '../../data/menu-category-items.data';

@Component({
  selector: 'app-menu-category',
  imports: [MenuCategoryCards, MenuCard],
  templateUrl: './menu-category.html',
})
export default class MenuCategory {
  readonly categories = signal(MENU_CATEGORY_ITEMS);
  readonly subcategories = signal(MENU_SUBCATEGORIES);

  subcategoriesFor(categoryId: string): MenuSubcategory[] {
    return this.subcategories().filter((subcategory) => subcategory.categoryId === categoryId);
  }
}
