import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  it('renders the footer navigation as ordered links', async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    const fixture = TestBed.createComponent(Footer);

    await fixture.whenStable();

    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll(
        'nav[aria-label="Enlaces del sitio"] ol a',
      ),
    );

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Menú',
      'Cupones y ofertas',
      'Términos y condiciones',
      'Políticas de privacidad',
    ]);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/menu',
      '/cupones-y-ofertas',
      '/terminos-y-condiciones',
      '/politicas-de-privacidad',
    ]);
    expect(links.every((link) => link.classList.contains('hover:text-yellow'))).toBe(true);
  });
});
