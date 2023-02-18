import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationStatsComponent } from './notification-stats.component';

describe('NotificationStatsComponent', () => {
  let component: NotificationStatsComponent;
  let fixture: ComponentFixture<NotificationStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
