import { AfterViewInit, Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { SocialMediaLinksComponent } from '../../components/social-media-links/social-media-links.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { SplashComponent } from '../splash/splash.component';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AppRoutes } from '../../../enums/routes-data.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SocialMediaLinksComponent,
    AboutMeComponent,
    SplashComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    public appConfig = AppConfig
    public isAnimationPlayed: boolean;
    public assetPaths = AssetPaths;

    constructor(
      private _globalStatsService: GlobalStatsService,
    ) {
      this.isAnimationPlayed = _globalStatsService.isSplashAnimationPlayed;
      this._globalStatsService.setCanonicalUrl(AppRoutes.HOME);
    }

    ngAfterViewInit(): void {
      this._playSplashAnimation();
    }

    private _playSplashAnimation(): void {
      setTimeout(() => {
          this._globalStatsService.isSplashAnimationPlayed = true;
          this.isAnimationPlayed = true;
      }, 3200);
    }
}