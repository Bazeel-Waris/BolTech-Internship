import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges{
     searchIcon: string = '../../assets/search.svg'
     
     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = '';
     
     ngOnChanges(changes: SimpleChanges): void {
          this.getLocalStorage = localStorage.getItem('themeMode');
          console.log(this.getLocalStorage);
          this.selectedThemeMode = this.getLocalStorage;
     }
     
     @ViewChild('searchedContact')
     searchedContact: ElementRef;

     @Output()
     onSearchingContact: EventEmitter<string> = new EventEmitter<string>();

     searchingContact() {
          this.onSearchingContact.emit(this.searchedContact.nativeElement.value);
     }

     changeIcon(){
          if(this.searchIcon === '../../assets/attachment.svg' && this.searchedContact.nativeElement.value === '') {
               this.searchIcon = '../../assets/search.svg'
          } else {
               this.searchIcon = '../../assets/attachment.svg'
          }
     }

     back() {
          if(this.searchedContact.nativeElement.value !== '') {
               this.searchIcon = '../../assets/search.svg'
               this.searchedContact.nativeElement.value = '';
               this.onSearchingContact.emit(this.searchedContact.nativeElement.value);
          }
     }

}
