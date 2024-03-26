import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularNgTemplate';

  inputVal: string = '';
//   inputVal: string[] = ['Hello', 'Hi There'];
     toDestroy: boolean = false;

  constructor() {
    console.log('App Component Constructor Called!')
  }

//   ngAfterViewInit() {
//      console.log('ngAfterViewInit is calling from APP Component!');
     
//   }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
//     this.inputVal.push(inputEl.value);
  }

  onDestroyClicked() {
     this.toDestroy = !this.toDestroy;
  }

//   This is toggle Funcationality by use of 
//   <ng-template></ng-template>, 
//   <ng-container></ng-container> and 
//   <button></button> Element

//   toggle: boolean = false;

//   onToggle() {
//     this.toggle = !this.toggle;
//   }
}
