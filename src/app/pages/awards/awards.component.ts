import { Component } from '@angular/core';
import { Award } from '../../models/award';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-awards',
    imports: [CommonModule],
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  awards: Award[] = [
    { title: 'Giải nhất cuộc thi lập trình XYZ', time: '2023' }
  ];
}