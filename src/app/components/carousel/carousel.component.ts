import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges } from '@angular/core';
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

export class CarouselComponent implements OnChanges{
    @Input() loop = true;
    @Input() slidesPerView = 3.5;
    @Input() speed = 1000;
    @Input() navigation = false;
    @Input() pagination = { clickable: true, dynamicBullets: true };
    @Input() grabCursor = true;
    @Input() centeredSlides = false;
    @Input() spaceBetween = 0;
    @Input() withShadowLeft = false;
    @Input() breakpoints?: Record<number, { slidesPerView: number }>;
    
    defaultBreakpoints: Record<number, { slidesPerView: number }> = {};
    
    ngOnChanges(): void {
        this.updateDefaultBreakpoints();
        
        if (!this.breakpoints) {
            this.breakpoints = this.defaultBreakpoints;
        }
    }
    
    private updateDefaultBreakpoints(): void {
        this.defaultBreakpoints = {
            320: { 
                slidesPerView: this.slidesPerView >= 3 ? this.slidesPerView - 2 : 1.5
            },
            768: { 
                slidesPerView: this.slidesPerView >= 2 ? this.slidesPerView - 1 : 1.5
            },
            1024: { 
                slidesPerView: this.slidesPerView
            },
        };
    }
}
