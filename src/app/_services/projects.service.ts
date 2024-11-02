import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects : Project[]=[
    {
      id: 1,
      name: 'Portfolio Website',
      summary: 'Portfolio Website',
      description: 'This is my personal portfolio website. It is built using Angular and Bootstrap. It is hosted on GitHub Pages. It is a responsive website that showcases my projects, skills, and contact information.',
      projectLink: 'https://github.com/Dacoband/Angular-MyPortfolio',
      picture: [],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT],
    },
    {
      id: 2,
      name: 'Hair Salon Booking App',
      summary: 'Fullstack web app developed using Vite React and ASP.NET Web API Core',
      description: 'The Hair Salon Booking App was developed to address the challenges customers face when trying to find and book appointments at hair salons. Existing booking systems are often not user-friendly and lack transparency, making it difficult for users to confirm appointments and service prices. Our solution streamlines this process, providing convenience and clarity for both customers and salons. Users can easily search for salons based on location, type of service (haircuts, coloring, hair care, etc.), or even specific stylists. Real-time updates on available time slots allow customers to book appointments quickly and receive immediate confirmation with transparent pricing. The app also features reminders for upcoming appointments and allows users to manage, reschedule, or cancel their bookings. After receiving services, customers can leave detailed reviews and feedback, helping others make informed decisions. Integrated payment options like VNPay and credit cards enable seamless in-app payments, with clear pricing before booking. Additionally, the app fosters a community by connecting users with stylists and salons, sharing beauty tips, and offering exclusive promotions. Salons can manage customer lists, stylist schedules, and track monthly revenue, while also updating services, prices, and promotions directly through the system. Overall, the Hair Salon Booking App enhances the booking experience, improves transparency, and boosts customer satisfaction.',
      projectLink: 'https://github.com/Dacoband/SWD392-HairSalon',
      picture: [],
      tags: [Tag.REACT, Tag.TYPESCRIPT, Tag.ASPNET, Tag.CSHARP],
    },
  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project{
    let project = this.projects.find(x => x.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches the given id: ' + id);
    }
    return project;
  }
}
