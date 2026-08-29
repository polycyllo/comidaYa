import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  QueryList,
  ViewChildren,
  signal,
  viewChildren,
} from '@angular/core';
import { MenuCategoryCards } from '../../components/menu-category-cards/menu-category-cards';
import { MenuCard } from '../../components/menu-card/menu-card';
import { MENU_SUBCATEGORIES, MenuSubcategory } from '../../data/menu-products.data';
import { MENU_CATEGORY_ITEMS } from '../../data/menu-category-items.data';

@Component({
  selector: 'app-menu-category',
  imports: [MenuCategoryCards, MenuCard],
  templateUrl: './menu-category.html',
})
export default class MenuCategory implements AfterViewInit, OnDestroy {
  readonly categories = signal(MENU_CATEGORY_ITEMS);
  readonly subcategories = signal(MENU_SUBCATEGORIES);

  readonly activeCategoryId = signal<string | null>(null);

  @ViewChildren('categorySection')
  private readonly categorySections!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;

  subcategoriesFor(categoryId: string): MenuSubcategory[] {
    return this.subcategories().filter((subcategory) => subcategory.categoryId === categoryId);
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          const categoryId = visibleEntry.target.getAttribute('data-category-id');

          if (categoryId) {
            this.activeCategoryId.set(categoryId);
            this.centerCategoryCard(categoryId);
          }
        }
      },
      {
        rootMargin: '-120px 0px -60% 0px',
        threshold: 0,
      },
    );

    this.categorySections.forEach((section) => {
      this.observer?.observe(section.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @ViewChild('categoryScroller')
  private readonly categoryScroller!: ElementRef<HTMLElement>;

  private centerCategoryCard(categoryId: string): void {
    const scroller = this.categoryScroller.nativeElement;

    const card = scroller.querySelector<HTMLElement>(`[data-category-card-id="${categoryId}"]`);

    if (!card) {
      return;
    }

    const scrollerRect = scroller.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const isCompletelyVisible =
      cardRect.left >= scrollerRect.left && cardRect.right <= scrollerRect.right;

    if (isCompletelyVisible) {
      return;
    }

    const centeredPosition = card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;

    scroller.scrollTo({
      left: centeredPosition,
      behavior: 'smooth',
    });
  }

  scrollToCategory(categoryId: string): void {
    const section = this.categorySections.find(
      (item) => item.nativeElement.getAttribute('data-category-id') === categoryId,
    );

    if (!section) {
      return;
    }

    this.activeCategoryId.set(categoryId);

    section.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
