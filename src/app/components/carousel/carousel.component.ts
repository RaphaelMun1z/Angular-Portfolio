import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';

import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarouselComponent {
   
    
}
