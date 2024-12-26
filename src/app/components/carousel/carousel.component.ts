import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

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
    @Input() loop: boolean = true;
    @Input() slidesPerView: number = 2.5;
    @Input() speed: number = 500;
    @Input() autoplay: any = true;
    @Input() pagination: any = { clickable: true, dynamicBullets: true };
    @Input() grabCursor: boolean = true;
    @Input() breakpoints: any = {
        320: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 }
    };
}
