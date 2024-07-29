import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../../types/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  featuredProject: Project | undefined;

  constructor(
    private titleService: Title,
    private projectService: ProjectService
  ) {
    this.titleService.setTitle('Bozhidar Petrov - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }
}
