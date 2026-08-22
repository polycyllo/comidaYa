import { TestBed } from '@angular/core/testing';
import { NavOptions } from './nav-options';

describe('NavOptions', () => {
  it('renders a text-only navigation option without requiring an icon', async () => {
    await TestBed.configureTestingModule({
      imports: [NavOptions],
    }).compileComponents();

    const fixture = TestBed.createComponent(NavOptions);
    fixture.componentRef.setInput('label', 'Menú');

    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent?.trim()).toBe('Menú');
  });
});
