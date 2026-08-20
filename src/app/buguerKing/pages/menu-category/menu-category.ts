import { Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { PriceCard } from '../../components/price-card/price-card';

@Component({
  selector: 'app-menu-category',
  imports: [LucideArrowRight, PriceCard],
  templateUrl: './menu-category.html',
  styleUrl: './menu-category.css',
})
export default class MenuCategory {}
