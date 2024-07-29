import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../../types/Project';
import { ProjectService } from '../../services/project.service';
import {} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private titleService: Title,
    private projectService: ProjectService
  ) {
    this.titleService.setTitle('Bozhidar Petrov - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.projects;
  }
}
