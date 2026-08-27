import { Component, input } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { DishItem } from '../../interfaces/DishItem';

@Component({
  selector: 'app-price-card',
  imports: [LucideArrowRight],
  templateUrl: './price-card.html',
  styleUrl: './price-card.css',
})
export class PriceCard {
  data = input.required<DishItem>();
  isSelected = input(false);
}
