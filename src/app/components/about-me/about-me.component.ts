import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public assetPaths = AssetPaths;
  public appConfig = AppConfig;
}
