import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuCard } from './submenu-card';

describe('SubmenuCard', () => {
  let component: SubmenuCard;
  let fixture: ComponentFixture<SubmenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmenuCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
