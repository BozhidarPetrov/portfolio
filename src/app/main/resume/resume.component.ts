import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent2 } from '../../shared/modal2/modal2.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  bsModalRef?: BsModalRef;

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private modalService: BsModalService
  ) {
    this.titleService.setTitle('Bozhidar Petrov - Resume');
  }

  downloadResume() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      '../../assets/Bozhidar-Petrov-FlowCV-Resume-20240729.pdf'
    );
    link.setAttribute('download', 'Bozhidar-Petrov-FlowCV-Resume-20240729.pdf');
    link.click();
    link.remove();
  }

  openCertModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {},
    };

    this.bsModalRef = this.modalService.show(ModalComponent2, modalOptions);
  }
}
