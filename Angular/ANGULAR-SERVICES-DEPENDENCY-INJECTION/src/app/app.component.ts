import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [SubscribeService]
})
export class AppComponent {
  title = 'ANGULAR-SERVICES-DEPENDENCY-INJECTION';

  // constructor(private subService: SubscribeService) {

  // }
}
