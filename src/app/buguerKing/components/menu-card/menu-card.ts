import { Component, input } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
  selector: 'app-menu-card',
  imports: [],
  templateUrl: './menu-card.html',
})
export class MenuCard {
  item = input.required<MenuItem>();
}
