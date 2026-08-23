import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeLocations } from './see-locations';

describe('SeeLocations', () => {
  let component: SeeLocations;
  let fixture: ComponentFixture<SeeLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeLocations],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeLocations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
