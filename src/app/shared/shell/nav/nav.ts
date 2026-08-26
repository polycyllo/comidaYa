import { Component, signal } from '@angular/core';
import {
  LucideMapPin,
  LucideMenu,
  LucidePen,
  LucideSearch,
  LucideShoppingBag,
  LucideShoppingCart,
} from '@lucide/angular';
import { NavOptions } from '../../../buguerKing/components/nav-options/nav-options';

@Component({
  selector: 'app-nav',
  imports: [NavOptions, LucideSearch],
  templateUrl: './nav.html',
})
export class Nav {
  readonly shoppingCart = LucideShoppingCart;
  readonly search = LucideSearch;
  readonly menuIcon = LucideMenu;
  readonly shoppingBag = LucideShoppingBag;
  readonly mapPin = LucideMapPin;
  readonly pen = LucidePen;

  address = signal('BK Ballivian');
}
