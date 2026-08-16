import { Component, signal } from '@angular/core';
import { MenuCard } from '../../components/menu-card/menu-card';
import { MenuItem } from '../../interfaces/MenuItem';
import { SeeLocations } from '../../components/see-locations/see-locations';

const MENU_ITEMS: MenuItem[] = [
  {
    img: '/menu/combosParrilla.png',
    title: 'Combos Parrilla',
  },
  {
    img: '/menu/combosPollo.png',
    title: 'Combos Pollo',
  },
  {
    img: '/menu/acompaniamiento.png',
    title: 'Acompañamientos',
  },
  {
    img: '/menu/cupones.png',
    title: 'Cupones',
  },
  {
    img: '/menu/ensaladas.png',
    title: 'Ensaladas',
  },
  {
    img: '/menu/hamburguesasSueltas.png',
    title: 'Hamburguesas Sueltas',
  },
  {
    img: '/menu/kingDuo.png',
    title: 'King Dúo',
  },
  {
    img: '/menu/kingJr.png',
    title: 'King Jr.',
  },
  {
    img: '/menu/postres.png',
    title: 'Postres',
  },
  {
    img: '/menu/promos.png',
    title: 'Promos',
  },
];

@Component({
  selector: 'app-home-page',
  imports: [MenuCard, SeeLocations],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  menuItems = signal<MenuItem[]>(MENU_ITEMS);
  isDragging = signal(false);

  private activePointerId: number | null = null;
  private dragStartX = 0;
  private dragStartScrollLeft = 0;

  startMenuDrag(event: PointerEvent, menu: HTMLElement): void {
    if (event.button !== 0 || event.pointerType !== 'mouse') return;

    this.activePointerId = event.pointerId;
    this.dragStartX = event.clientX;
    this.dragStartScrollLeft = menu.scrollLeft;
    this.isDragging.set(true);
    menu.setPointerCapture?.(event.pointerId);
  }

  moveMenuDrag(event: PointerEvent, menu: HTMLElement): void {
    if (!this.isDragging() || event.pointerId !== this.activePointerId) return;

    event.preventDefault();
    menu.scrollLeft = this.dragStartScrollLeft - (event.clientX - this.dragStartX);
  }

  endMenuDrag(event: PointerEvent, menu: HTMLElement): void {
    if (event.pointerId !== this.activePointerId) return;

    if (menu.hasPointerCapture?.(event.pointerId)) {
      menu.releasePointerCapture(event.pointerId);
    }
    this.activePointerId = null;
    this.isDragging.set(false);
  }
}
