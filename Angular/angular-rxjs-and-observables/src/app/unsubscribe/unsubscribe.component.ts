import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
     selector: 'app-unsubscribe',
     templateUrl: './unsubscribe.component.html',
     styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
     valueCounter = interval(1000);
     data: number[] = [];

     subscriber;

     onSubscribe() {
          this.subscriber = this.valueCounter.subscribe(data => this.data.push(data));
     }

     onUnsubscribe() {
          this.subscriber.unsubscribe();
     }
}
