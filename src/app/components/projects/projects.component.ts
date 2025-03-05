import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common'; // Thêm CommonModule
import { CarouselModule } from 'ngx-owl-carousel-o'; // Import CarouselModule
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CarouselModule], // Thêm CommonModule
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Website Portfolio',
      description: 'Website cá nhân giới thiệu bản thân và các dự án đã thực hiện của tui qua những giai đoạn khác nhau.',
      tech: 'Angular, SCSS, Bootstrap',
      github: 'https://github.com/Dacoband/Angular-MyPortfolio',
      image: '/assets/images/website-portfolio.jpg'
    },
    {
      image: '/assets/images/MrSalon.jpg',
      name: 'Mr.Salon',
      description: 'Hair Salon Booking App Web Application.',
      tech: '.NET, RESTful API, React, MongoDB, Deploy',
      github: 'https://github.com/Dacoband/Mr.Salon'
    }
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    animateOut: 'flipOutY',
    animateIn: 'flipInY',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}