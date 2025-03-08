import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AppRoutes } from '../../../enums/routes-data.enum';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [
        EducationCardComponent,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.EDUCATION);
    }
}
