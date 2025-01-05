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
    @Input() loop = true;
    @Input() slidesPerView = 2.5;
    @Input() speed = 1000;
    @Input() navigation = false;
    @Input() pagination = { clickable: true, dynamicBullets: true };
    @Input() grabCursor = true;
    @Input() breakpoints!: unknown;
    @Input() centeredSlides = false;
    @Input() spaceBetween = 0;
    @Input() withShadowLeft = false;
}
