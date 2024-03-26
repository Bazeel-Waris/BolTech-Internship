import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, of, from, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-observables';

  @ViewChild('createEvent') createEvent: ElementRef;
  
  createBtnObs;

  data: any[] = [];

  array1 = ['Ahmad', 'Miral', 'Ali'];

  array2 = [1, 4, 6, 3, 9];

  // 1. CREATE AN OBSERVABLE
  // myObservable = new Observable((observer) => {
  //   setTimeout(() => observer.next('Ahmad'), 1000);
  //   setTimeout(() => observer.next('Bazeel'), 2000);
  //   setTimeout(() => observer.next('Yasir'), 3000);
  //   // setTimeout(() => observer.error(new Error('Something went wrong! Please try Again.')), 4000);
  //   setTimeout(() => observer.next('Abdur Rehman'), 5000);
  //   setTimeout(() => observer.next('Hassan'), 6000);
  //   setTimeout(() => observer.complete(), 7000);
  // });
  
  // Create an Observable using Of() Operator
//   myObservable = of(...this.array1, ...this.array2)

     // from() Operator
  myObservable = from([2, 4, 6, 8, 10]);

  transformedObs = this.myObservable.pipe(map((value) => {
     return value * 10;
  }))

  getAsyncData() {
    // Observer
    // next, error, complete
//     this.myObservable.subscribe((val: any) => {
//       this.data.push(val);
//       console.log(val)
//     },
//     err => {
//       alert(err.message)
//     },
//     () => {
//       alert('All Data have been downloaded!')
//     }
//     ) 
this.transformedObs.subscribe({
     next: (val: any) => {
       this.data.push(val);
       console.log(val);
     },
     error(err){
       alert(err.message);
     },
     complete(){
       alert('All the data is streamed!')
     }
   })
   console.log(this.data);
  }

//   buttonClicked() {
//      let count = 1;
//      this.createBtnObs = fromEvent(this.createEvent.nativeElement, 'click')
//                          .subscribe((data) => {
//                               console.log(data);
//                               this.showItem(count++)
//                          })
//   }

//   ngAfterViewInit() {
//      this.buttonClicked();
//   }

//     showItem(val){
//     let div = document.createElement('div');
//     div.innerText = 'Item' + val;
//     div.className = 'data-list';
//     document.getElementById('container').appendChild(div);
//   }
}