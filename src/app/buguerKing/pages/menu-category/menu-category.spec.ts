import { ComponentFixture, TestBed } from '@angular/core/testing';
import MenuCategory from './menu-category';

describe('MenuCategory', () => {
  let fixture: ComponentFixture<MenuCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [MenuCategory] }).compileComponents();
    fixture = TestBed.createComponent(MenuCategory);
    fixture.detectChanges();
  });

  it('renders a text-only product card below its category title', () => {
    const page = fixture.nativeElement as HTMLElement;
    const categoryTitle = Array.from(
      page.querySelectorAll<HTMLElement>('p'),
    ).find(
      (heading) => heading.textContent?.trim() === 'Combos a la Parrilla',
    );
    const productCard = Array.from(
      page.querySelectorAll<HTMLElement>('app-menu-card'),
    ).find(
      (card) => card.textContent?.trim().includes('Whopper'),
    );

    expect(categoryTitle).toBeTruthy();
    expect(productCard).toBeTruthy();
    expect(productCard?.querySelector('img')).toBeNull();
  });
});
