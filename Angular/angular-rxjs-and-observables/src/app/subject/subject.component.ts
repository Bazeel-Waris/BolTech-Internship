import { Component } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
     selector: 'app-subject',
     templateUrl: './subject.component.html',
     styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

     ngOnInit() {
          // let obs = new Observable(observer => observer.next(Math.random()));

          // const subject = new BehaviorSubject(0);
          // const subject = new Subject(0);
          const subject = new ReplaySubject();

          subject.next(100)
          subject.next(200)
          subject.next(300)

          // 1. subscriber
          subject.subscribe(data => console.log('sub 1 ' + data));

          // 2. subscriber
          subject.subscribe(data => console.log('sub 2 ' + data));

          subject.next(5500)

          // 3. subscriber
          subject.subscribe(data => console.log('sub 3 ' + data));

          // // 1. SubScriber
          // obs.subscribe(data => console.log(data));

          // // 2. SubScriber
          // obs.subscribe(data => console.log(data));

          // let subject = new Subject();

          // // 1. SubScriber
          // subject.subscribe(data => console.log(data));

          // // 2. SubScriber
          // subject.subscribe(data => console.log(data));

          // subject.next(Math.random());

          // AJAX Call
          // const subject = new Subject();
          // const data = ajax('https://randomuser.me/api/');
          
          // subject.subscribe((res) => console.log(res));
          // subject.subscribe((res) => console.log(res));
          // subject.subscribe((res) => console.log(res));

          // data.subscribe(subject);
     }
}
