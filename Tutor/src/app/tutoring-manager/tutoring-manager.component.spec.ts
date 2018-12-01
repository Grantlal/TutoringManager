import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringManagerComponent } from './tutoring-manager.component';

describe('TutoringManagerComponent', () => {
  let component: TutoringManagerComponent;
  let fixture: ComponentFixture<TutoringManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoringManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
