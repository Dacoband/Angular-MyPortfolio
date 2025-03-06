import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';

@Component({
  selector: 'app-social-media-links',
  imports: [CommonModule],
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.scss'
})
export class SocialMediaLinksComponent {
  public appConfig = AppConfig;
}
