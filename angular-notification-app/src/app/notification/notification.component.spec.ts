import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification } from './notification.component';

describe('NotificationComponent', () => {
  let component: Notification;
  let fixture: ComponentFixture<Notification>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Notification ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Notification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
