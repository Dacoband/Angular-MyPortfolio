import { Component } from '@angular/core';
import { LoaderLogoComponent } from '../../components/loader-logo/loader-logo.component';

@Component({
    selector: 'app-splash',
    standalone: true,
    imports: [
        LoaderLogoComponent
    ],
    templateUrl: './splash.component.html',
    styleUrl: './splash.component.scss'
})
export class SplashComponent {
    
}
