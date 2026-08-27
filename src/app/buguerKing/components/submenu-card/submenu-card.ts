import { Component, input, output, signal } from '@angular/core';
import { DishItem } from '../../interfaces/DishItem';

@Component({
  selector: 'app-submenu-card',
  imports: [],
  templateUrl: './submenu-card.html',
  styleUrl: './submenu-card.css',
})
export class SubmenuCard {
  data = input<DishItem | null>();

  selectedOption = input<number | null>();

  optionChange = output<number>();

  setSelectedOption(id: number) {
    this.optionChange.emit(id);
  }
}
