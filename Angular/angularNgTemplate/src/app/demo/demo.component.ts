import { 
     AfterContentChecked, 
     AfterContentInit, 
     AfterViewChecked, 
     AfterViewInit, 
     Component, 
     ContentChild, 
     DoCheck,
     ElementRef, 
     Input, 
     OnChanges, 
     OnInit, 
     SimpleChanges, 
     ViewChild
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  title: string = 'Demo Component';

  @Input() message: string;
  
  @ViewChild('temp') para: ElementRef;
  @ContentChild('tempPara') tempPara: ElementRef;

  constructor() {
//     console.log('Demo Component Constructor Called!');
//     console.log(this.title);
//     console.log(this.message);    
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChanges method Called in DemoComponent Class from an interface!')
//     console.log(this.message);
//     console.log(changes);        
  }

  ngOnInit(): void {
    console.log('ngOnInit method is called in DemoComponent Class from Interface!');    
  }

  ngDoCheck(): void {
//     console.log('ngDoCheck method is called in DemoComponent Class from Interface!');
    console.log('In ngDoCheck!', this.tempPara);
  }

  ngAfterContentInit() {
     // console.log('ngAfterContentInit method is called in DemoComponent Class from Interface!');
     console.log('In ngAfterContentInit', this.tempPara);
  }

  ngAfterContentChecked() {
     // console.log('ngAfterContentChecked method is called in DemoComponent Class from Interface!');
     console.log('In ngAfterContentChecked', this.para);
  }

  ngAfterViewInit() {
     // console.log('ngAfterViewInit is called in DemoComponent!');
     console.log('In ngAfterViewInit', this.para);
  }

  ngAfterViewChecked() {
     console.log('In ngAfterViewChecked', this.para);
  }

  ngOnDestroy() {
     console.log('Destroy Hook is Called!');
  }
}
