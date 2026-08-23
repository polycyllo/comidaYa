import { Component, input, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem';
import MenuCategory from '../../pages/menu-category/menu-category';

@Component({
  selector: 'menu-category-cards',
  imports: [],
  templateUrl: './menu-category-cards.html',
})


export class MenuCategoryCards {

  readonly imageUrl = input.required<string>();
  readonly label = input.required<string>()
  
}
