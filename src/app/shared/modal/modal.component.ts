import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../../../types/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  project: Project | undefined;

  constructor(public bsModalRef: BsModalRef) {}
}
