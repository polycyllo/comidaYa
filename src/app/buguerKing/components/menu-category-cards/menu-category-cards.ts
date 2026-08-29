import { Component, input, signal } from '@angular/core';


@Component({
  selector: 'menu-category-cards',
  imports: [],
  templateUrl: './menu-category-cards.html',
})
export class MenuCategoryCards {
  readonly imageUrl = input.required<string>();
  readonly label = input.required<string>();
  readonly active = input(false);
}
