import { Component, inject } from '@angular/core';
import { LicensePlateComponent } from './components/license-plate/license-plate.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addPlate, ILisencePlate, selectLisencePlates } from './store/plate.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [
    LicensePlateComponent,
    CommonModule,
    FormsModule
  ],
  template: `
    <div class="container-b">
      <div class="container-b-a">
        <h1>{{ title }}</h1>
        <label for="plate">License Plate: {{plate}}</label>
        <div class="container-b-a-c">
          <input type="text" name="country" id="country" placeholder="country" [(ngModel)]="country">
          <input type="text" name="plate" id="plate" placeholder="plate" [(ngModel)]="plate">
          <button (click)="createPlate()">Agregar plate</button>
        </div>
      </div>
    </div>
    <div class="container">
      @for (plate of plates(); track plate.country) {
        <app-license-plate [plate]="plate"></app-license-plate>
      }
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NGRX';
  store = inject(Store);
  country = '';
  plate = '';
  plates = this.store.selectSignal(selectLisencePlates);

  createPlate() {
    this.store.dispatch(addPlate({ country: this.country, plate: this.plate }));
    this.country = '';
    this.plate = '';
  }
}
