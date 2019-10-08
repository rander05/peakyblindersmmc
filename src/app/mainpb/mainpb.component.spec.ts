import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpbComponent } from './mainpb.component';

describe('MainpbComponent', () => {
  let component: MainpbComponent;
  let fixture: ComponentFixture<MainpbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
