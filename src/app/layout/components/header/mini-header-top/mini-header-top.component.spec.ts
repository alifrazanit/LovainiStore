import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeaderTopComponent } from './mini-header-top.component';

describe('MiniHeaderTopComponent', () => {
  let component: MiniHeaderTopComponent;
  let fixture: ComponentFixture<MiniHeaderTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHeaderTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniHeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
