import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

import { HousingService } from '../housing.service';
@Component({
     standalone: true,
     selector: 'app-home',
     template: `
          <section>
               <form>
                    <input type="text" placeholder="Filter by city">
                    <button class="primary" type="button">Search</button>
               </form>
          </section>
          <section class="results">
               <app-housing-location *ngFor="let location of housingLocationList" 
                    [housingLocation]="location">
               </app-housing-location>
          </section>
     `,
     styleUrls: ['./home.component.css'],
     imports: [HousingLocationComponent, CommonModule]
})

export class HomeComponent {

     housingLocationList: HousingLocation[] = [];
     housingService: HousingService = inject(HousingService);
     filteredLocationList: HousingLocation[] = [];

     constructor() {
          this.housingLocationList = this.housingService.getAllHousingLocations();
          this.filteredLocationList = this.housingLocationList;
     }

     
}
