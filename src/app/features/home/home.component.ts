import { Component } from '@angular/core';
import { FeaturesModule } from '../features.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currencies = [
    { name: 'USD', value: 850 },
    { name: 'EUR', value: 910 },
    { name: 'GBP', value: 1020 },
  ];
}
