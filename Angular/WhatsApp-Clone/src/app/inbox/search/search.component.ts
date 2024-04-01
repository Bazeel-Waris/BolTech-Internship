import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
     searchIcon: string = '../../assets/search.svg'
     
     @ViewChild('searchedContact')
     searchedContact: ElementRef;

     @Output()
     onSearchingContact: EventEmitter<string> = new EventEmitter<string>();

     searchingContact() {
          this.onSearchingContact.emit(this.searchedContact.nativeElement.value);
          // console.log(this.searchedContact.nativeElement.value);
     }

     changeIcon(){
          if(this.searchIcon === '../../assets/attachment.svg') {
               this.searchIcon = '../../assets/search.svg'
          } else {
               this.searchIcon = '../../assets/attachment.svg'
          }
     }
}
