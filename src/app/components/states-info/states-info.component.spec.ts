import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesInfoComponent } from './states-info.component';

describe('StatesInfoComponent', () => {
  let component: StatesInfoComponent;
  let fixture: ComponentFixture<StatesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
