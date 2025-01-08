import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { TestimonialService } from '../../services/testimonial.service';
import { CommonModule } from '@angular/common';
import { BaseContainerComponent } from '../base-container/base-container.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';

interface Testimonial {
    id: string;
    imageUrl: string;
    name: string;
    text: string;
    position: string;
}

@Component({
    selector: 'app-section-testimonials',
    standalone: true,
    imports: [CarouselComponent, CarouselCardComponent, SectionTitleComponent, CommonModule, BaseContainerComponent],
    host: { ngSkipHydration: 'true' },
    templateUrl: './section-testimonials.component.html',
    styleUrl: './section-testimonials.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SectionTestimonialsComponent implements OnInit{
    testimonials: Testimonial[] = [];
    
    constructor(private service:TestimonialService){}
    
    ngOnInit() {
        this.service.getAll().subscribe((testimonials) => {
            this.testimonials = testimonials;
        });
    }
}
