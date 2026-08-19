import { Component } from '@angular/core';
import { NavOptions } from "../../../buguerKing/components/nav-options/nav-options";
import { ShoppingCart, Search, MenuIcon } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-nav',
  imports: [NavOptions],
  templateUrl: './nav.html',
})
export class Nav {

  readonly shoppingCart = ShoppingCart
  readonly search = Search
  readonly menuIcon = MenuIcon

}
