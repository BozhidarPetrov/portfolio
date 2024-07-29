import { Injectable } from '@angular/core';
import { Tag } from '../../types/Tag';
import { Project } from '../../types/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 0,
      title: 'Fancy Cars',
      description_short: 'My Soft Uni graduation project',
      description_long:
        'I made this project for finishing my SoftUni Angular course and completing the JS / Angular lectures. It has guest and user functionality, different route guards and sends CRUD requests to the DB. It was my first project with Angular and Bootstrap - of course there is a lot to be desired looking at it now, but it was a good experience. The backend (Mongoose database) runs on an Express JS server, which I made on a previous SoftUni course and modified it to work with this particular project. It was fun and a great start - my first real app. ',
      project_link: 'https://github.com/BozhidarPetrov/fancy-cars-angular-app',
      pictures: [
        '../../assets/fancy_cars_1.png',
        '../../assets/fancy_cars_2.png',
        '../../assets/fancy_cars_3.png',
      ],
      tags: [
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.EXPRESSJS,
        Tag.MONGOOSE,
        Tag.BOOTSTRAP,
      ],
    },
    {
      id: 1,
      title: 'Weather App',
      description_short: 'Single and multiple days forecast',
      description_long:
        'My first app after graduating SoftUni and my first Angular app with standalone components. I used the free weatherapi.com API - with the free subscription you can have 1 and 3 days of forecast.',
      project_link: 'https://github.com/BozhidarPetrov/weather-app',
      pictures: [
        '../../assets/weather_app_1.png',
        '../../assets/weather_app_2.png',
        '../../assets/weather_app_3.png',
      ],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.WEATHERAPI, Tag.BOOTSTRAP],
    },
    {
      id: 2,
      title: 'Portfolio',
      description_short: 'The app you are browsing right now',
      description_long:
        'My interactive CV. I created it by following an awesome course from softwareengineeringskills9082 in YouTube and of course changed some things to my liking. Great experience - it is kept up to date with my CV, projects and newly aquired skills.',
      project_link: 'https://github.com/BozhidarPetrov/portfolio',
      pictures: [
        '../../assets/portfolio_1.png',
        '../../assets/portfolio_2.png',
        '../../assets/portfolio_3.png',
      ],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new Error('There is no project that matches the id:' + id);
    }

    return project;
  }
}
