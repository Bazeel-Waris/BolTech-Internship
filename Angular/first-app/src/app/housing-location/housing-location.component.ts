import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
     standalone: true,
     selector: 'app-housing-location',
     template: `
          <section class="listing">
               <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
               <h2 class="listing-heading">{{ housingLocation.name }}</h2>
               <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
               <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
          </section>
     `,
     styleUrls: ['./housing-location.component.css'],
     imports: [
          RouterLink,
          RouterOutlet
     ]
})
export class HousingLocationComponent {
     @Input() housingLocation!: HousingLocation;
}
