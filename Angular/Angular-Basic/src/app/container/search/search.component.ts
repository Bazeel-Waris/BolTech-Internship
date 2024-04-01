import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchText: string = '';

  // We transfer Data from Child-to-parent component in three steps
  // 1. Create Custom Event
  @Output() // To bind this event to a parent component, we need @output() Decorator
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // 2. Create Method that would raised the above event
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }

  // updateInputValue(event: any) {
  //   this.searchText = event.target.value;
  // }

  // Optional 2nd Argument of @ViewChild()
  // 1. read: Use it to read the different token from the queried elements.
  // 2. static: Determines when the query is resolved.
  //           true is when the view is initialized (before the first chnage detection) for first time.
  //           false if you want it to be resolved after every change detection.
  @ViewChild('searchInput') searchInputEl: ElementRef;

  updateInputValue() { // inputElement: HTMLInputElement
     this.searchText = this.searchInputEl.nativeElement.value;
     // console.log(this.searchInputEl);
    this.searchTextChanged.emit(this.searchText);

  }
}
