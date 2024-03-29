import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
     searchIcon: string = '../../assets/search.svg'
     searchedContact: string = '';

     changeIcon(){
     
          if(this.searchIcon === '../../assets/attachment.svg') {
               this.searchIcon = '../../assets/search.svg'
               this.searchedContact = '';
               console.log(this.searchedContact);
          } else {
               this.searchIcon = '../../assets/attachment.svg'
               console.log(this.searchedContact);
          }

          // console.log(this.searchedContact);
     }
}
