import { Component, Input } from '@angular/core';
import { Project } from '../../../types/Project';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    };

    this.bsModalRef = this.modalService.show(ModalComponent, modalOptions);
  }
}
