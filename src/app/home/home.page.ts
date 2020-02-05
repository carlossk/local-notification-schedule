import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ScheduleNotificationService } from '../services/schedule-notification.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(
    private localNotification: ScheduleNotificationService
  ) {

  }
  createNotification(title: string, bodyMessage: string, frequency: number) {
    console.log(title, bodyMessage, frequency);
    if (!(bodyMessage && title && frequency)) {
      return;
    }
    this.localNotification.createSchedule(title, bodyMessage, +frequency);
  }

}
