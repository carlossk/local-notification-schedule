import { Injectable } from '@angular/core';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class ScheduleNotificationService {

  constructor(private localNotifications: LocalNotifications) { }

  createSchedule(_title: string, bodyText: string, frequency: number) {
    this.localNotifications.schedule({
      title: _title,
      text: bodyText,
      trigger: {
        every: { hour: frequency, minute: 0 },
      },
      led: 'FF0000',
      sound: null,
      vibrate: true
    });
  }

}
