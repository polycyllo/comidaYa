import { Component } from '@angular/core';
import { LucideMenu, LucideSearch, LucideShoppingCart } from '@lucide/angular';

@Component({
  selector: 'app-nav',
  imports: [LucideSearch, LucideShoppingCart, LucideMenu],
  templateUrl: './nav.html',
})
export class Nav {}
