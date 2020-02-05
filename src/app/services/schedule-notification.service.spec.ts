import { TestBed } from '@angular/core/testing';

import { ScheduleNotificationService } from './schedule-notification.service';

describe('ScheduleNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleNotificationService = TestBed.get(ScheduleNotificationService);
    expect(service).toBeTruthy();
  });
});
