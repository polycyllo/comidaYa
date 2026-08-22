import { TestBed } from '@angular/core/testing';
import { NavOptions } from '../../../buguerKing/components/nav-options/nav-options';
import { Nav } from './nav';

describe('Nav', () => {
  beforeEach(async () => {
    TestBed.overrideComponent(NavOptions, {
      set: {
        template: '<button type="button">{{ label() }}</button>',
      },
    });

    await TestBed.configureTestingModule({
      imports: [Nav],
    }).compileComponents();
  });

  it('keeps the compact navigation actions in Burger King order', async () => {
    const fixture = TestBed.createComponent(Nav);

    await fixture.whenStable();

    const actions = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll(
        'nav > ul:last-child > li > nav-options',
      ),
    ).map((action) => action.textContent?.trim());

    expect(actions.slice(0, 3)).toEqual(['Buscar', 'Carrito', 'Menú']);
  });

  it('shows the product search field from large screens onward', async () => {
    const fixture = TestBed.createComponent(Nav);

    await fixture.whenStable();

    const searchContainer = (fixture.nativeElement as HTMLElement).querySelector(
      '#product-search',
    )?.parentElement;

    expect(searchContainer?.className).toContain('lg:block');
  });
});
