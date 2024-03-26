import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  // providers: [SubscribeService] 2. Telling Angular What to Provide
})

export class HeroComponent {

    // 1. Telling Angular How to Provide
  constructor(private subService: SubscribeService) {

  }

  onSubscribe() {
    this.subService.onSubscribeClicked('Quarterly');
  }
}
