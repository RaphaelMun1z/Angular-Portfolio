import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();

@Component({
    selector: 'app-vertical-carousel',
    standalone: true,
    imports: [],
    templateUrl: './vertical-carousel.component.html',
    styleUrl: './vertical-carousel.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VerticalCarouselComponent {
}
