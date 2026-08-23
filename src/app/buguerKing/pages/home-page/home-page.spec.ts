import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home-page';

describe('HomePage menu drag', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let menu: HTMLElement;

  const pointerEvent = (
    type: string,
    {
      clientX,
      button = 0,
      pointerId = 1,
      pointerType = 'mouse',
    }: { clientX: number; button?: number; pointerId?: number; pointerType?: string },
  ): Event => {
    const event = new MouseEvent(type, { bubbles: true, button, clientX });
    Object.defineProperties(event, {
      pointerId: { value: pointerId },
      pointerType: { value: pointerType },
    });
    return event;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HomePage] }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    menu = fixture.nativeElement.querySelector('.menu-carousel');
  });

  it('moves scrollLeft by the inverse mouse distance while dragging', () => {
    menu.scrollLeft = 120;
    menu.dispatchEvent(pointerEvent('pointerdown', { clientX: 300 }));
    menu.dispatchEvent(pointerEvent('pointermove', { clientX: 250 }));

    expect(component.isDragging()).toBe(true);
    expect(menu.scrollLeft).toBe(170);
  });

  it('stops moving after pointerup', () => {
    menu.scrollLeft = 120;
    menu.dispatchEvent(pointerEvent('pointerdown', { clientX: 300 }));
    menu.dispatchEvent(pointerEvent('pointerup', { clientX: 250 }));
    menu.dispatchEvent(pointerEvent('pointermove', { clientX: 200 }));

    expect(component.isDragging()).toBe(false);
    expect(menu.scrollLeft).toBe(120);
  });

  it.each([
    { label: 'a secondary mouse button', button: 2, pointerType: 'mouse' },
    { label: 'a touch pointer', button: 0, pointerType: 'touch' },
  ])('does not drag with $label', ({ button, pointerType }) => {
    menu.scrollLeft = 120;
    menu.dispatchEvent(pointerEvent('pointerdown', { clientX: 300, button, pointerType }));
    menu.dispatchEvent(pointerEvent('pointermove', { clientX: 250, button, pointerType }));

    expect(component.isDragging()).toBe(false);
    expect(menu.scrollLeft).toBe(120);
  });

  it('stops dragging when the pointer is cancelled', () => {
    menu.dispatchEvent(pointerEvent('pointerdown', { clientX: 300 }));
    menu.dispatchEvent(pointerEvent('pointercancel', { clientX: 300 }));

    expect(component.isDragging()).toBe(false);
  });
});
