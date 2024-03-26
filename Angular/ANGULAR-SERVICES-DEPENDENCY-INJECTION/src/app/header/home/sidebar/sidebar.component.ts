import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // providers: [SubscribeService] // 2. What to Provide?
})

export class SidebarComponent {

  // 1. Telling Angular How to Provide
  constructor(private subService: SubscribeService) {
    
  }

  onSubscribe() {
    this.subService.onSubscribeClicked('Monthly');
  }
}
