import { Component } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profile: Profile = {
    name: 'Huỳnh Thiện Nhân',
    position: 'Software Engineer - Backend',
    school: 'FPT University',
    email: 'bolicious123@gmail.com',
    github: 'https://github.com/dacoband'
  };
}