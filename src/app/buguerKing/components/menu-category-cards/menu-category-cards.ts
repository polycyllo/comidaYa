import { Component, input, output } from '@angular/core';

@Component({
  selector: 'menu-category-cards',
  imports: [],
  templateUrl: './menu-category-cards.html',
})
export class MenuCategoryCards {
  readonly imageUrl = input.required<string>();
  readonly label = input.required<string>();
  readonly categoryId = input.required<string>();
  readonly active = input(false);
  readonly selected = output<string>();

  selectCategory(): void {
    this.selected.emit(this.categoryId());
  }
}
