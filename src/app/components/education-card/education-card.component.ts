import { Component, input, InputSignal } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { EducationSection } from '../../../interfaces/education.interface';

@Component({
    selector: 'app-education-card',
    standalone: true,
    imports: [],
    templateUrl: './education-card.component.html',
    styleUrl: './education-card.component.scss'
})
export class EducationCardComponent {
    public education: InputSignal<EducationSection> = input.required<EducationSection>();
}
