import { Component, signal } from '@angular/core';
import { NavOptions } from '../../../buguerKing/components/nav-options/nav-options';
import { ShoppingCart, Search, MenuIcon, ShoppingBag, MapPin, Pen } from 'lucide-angular/src/icons';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-nav',
  imports: [NavOptions, LucideAngularModule],
  templateUrl: './nav.html',
})
export class Nav {
  readonly shoppingCart = ShoppingCart;
  readonly search = Search;
  readonly menuIcon = MenuIcon;
  readonly shoppingBag = ShoppingBag;
  readonly mapPin = MapPin;
  readonly pen = Pen;

  address = signal('BK Ballivian');
}
