import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal2',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './modal2.component.html',
})
export class ModalComponent2 {
  cert_pictures = [
    '../../assets/cert_6.png',
    '../../assets/cert_5.png',
    '../../assets/cert_4.png',
    '../../assets/cert_3.png',
    '../../assets/cert_2.png',
    '../../assets/cert_1.png',
  ];

  constructor(public bsModalRef: BsModalRef) {}
}
