import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MENU_PRODUCTS } from '../../data/menu-products.data';
import MenuCategory from './menu-category';

describe('MenuCategory', () => {
  let fixture: ComponentFixture<MenuCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [MenuCategory] }).compileComponents();
    fixture = TestBed.createComponent(MenuCategory);
    fixture.detectChanges();
  });

  it('renders a local image for every menu product card', () => {
    const page = fixture.nativeElement as HTMLElement;
    const productCards = Array.from(page.querySelectorAll<HTMLElement>('app-menu-card'));
    const productImages = productCards.map((card) => card.querySelector('img'));

    expect(productCards).toHaveLength(MENU_PRODUCTS.length);
    expect(productImages).toHaveLength(MENU_PRODUCTS.length);
    expect(
      productImages.every((image) =>
        image?.getAttribute('src')?.startsWith('/menu/menu-products-images/'),
      ),
    ).toBe(true);
  });
});
