import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, vi } from 'vitest';
import { MENU_SUBCATEGORIES } from '../../data/menu-products.data';
import MenuCategory from './menu-category';

describe('MenuCategory', () => {
  let fixture: ComponentFixture<MenuCategory>;

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  beforeEach(async () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe(): void {}
        disconnect(): void {}
      },
    );

    await TestBed.configureTestingModule({ imports: [MenuCategory] }).compileComponents();
    fixture = TestBed.createComponent(MenuCategory);
    fixture.detectChanges();
  });

  it('renders only cards for the official menu subcategories', () => {
    const page = fixture.nativeElement as HTMLElement;
    const subcategoryCards = Array.from(page.querySelectorAll<HTMLElement>('app-menu-card'));
    const cardTitles = subcategoryCards.map((card) => card.textContent?.trim());

    expect(subcategoryCards).toHaveLength(MENU_SUBCATEGORIES.length);
    expect(cardTitles).toEqual(MENU_SUBCATEGORIES.map((subcategory) => subcategory.title));
  });
});
