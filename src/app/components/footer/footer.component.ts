import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public readonly currentDate = new Date();
    public readonly currentYear = this.currentDate.getFullYear();

    public appConfig = AppConfig;
}
