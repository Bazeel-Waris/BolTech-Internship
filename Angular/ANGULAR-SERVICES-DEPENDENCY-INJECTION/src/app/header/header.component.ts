import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // providers: [SubscribeService] //2. What to Provide to Angular?
})

export class HeaderComponent {
  selectedTab: string = 'home';

  // 1. Telling Angular How to Provide
  constructor(private subService: SubscribeService) {

  }

  //  When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //  When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe() {
    this.subService.onSubscribeClicked('Yearly');
  }
}
