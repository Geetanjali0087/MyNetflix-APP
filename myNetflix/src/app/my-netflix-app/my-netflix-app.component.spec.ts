import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetflixAppComponent } from './my-netflix-app.component';

describe('MyNetflixAppComponent', () => {
  let component: MyNetflixAppComponent;
  let fixture: ComponentFixture<MyNetflixAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNetflixAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNetflixAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
