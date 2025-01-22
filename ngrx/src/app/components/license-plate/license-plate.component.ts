import { Component, Input } from '@angular/core';
import { ILisencePlate } from '../../store/plate.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-license-plate',
  imports: [
    CommonModule
  ],
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.scss'
})
export class LicensePlateComponent {
  @Input() plate!: ILisencePlate;
}
