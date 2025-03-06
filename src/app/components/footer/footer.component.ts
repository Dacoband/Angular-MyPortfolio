import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public readonly currentDate = new Date();
    public readonly currentYear = this.currentDate.getFullYear();

    public appConfig = AppConfig;
}