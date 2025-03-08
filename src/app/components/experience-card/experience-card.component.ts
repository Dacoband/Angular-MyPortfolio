import { Component, input, InputSignal } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { Experience } from '../../../interfaces/work-experience.interface';

@Component({
    selector: 'app-experience-card',
    standalone: true,
    imports: [],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
    public experience: InputSignal<Experience> = input.required<Experience>();
}
