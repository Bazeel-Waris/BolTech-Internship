import { Component } from '@angular/core';

@Component({
  selector: 'app-setting-body',
  templateUrl: './setting-body.component.html',
  styleUrls: ['./setting-body.component.scss']
})
export class SettingBodyComponent {
     popUp: boolean = false;

     cancelPopUp(cancelPopUp: boolean) {
          this.popUp = cancelPopUp;
     }
}
