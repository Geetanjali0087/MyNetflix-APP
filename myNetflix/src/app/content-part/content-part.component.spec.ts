import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COntentPartComponent } from './content-part.component';

describe('COntentPartComponent', () => {
  let component: COntentPartComponent;
  let fixture: ComponentFixture<COntentPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [COntentPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COntentPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
