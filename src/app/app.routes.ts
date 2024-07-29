import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ResumeComponent } from './main/resume/resume.component';
import { ContactComponent } from './main/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent },
];
