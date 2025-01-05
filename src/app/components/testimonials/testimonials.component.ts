import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CarouselTestimonialCardComponent } from "../carousel/carousel-testimonial-card/carousel-testimonial-card.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { TestimonialService } from '../../services/testimonial.service';
import { CommonModule } from '@angular/common';
import { BaseContainerComponent } from '../base-container/base-container.component';

interface Testimonial {
    id: string;
    imageUrl: string;
    name: string;
    text: string;
    position: string;
}

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CarouselComponent, CarouselTestimonialCardComponent, SectionTitleComponent, CommonModule, BaseContainerComponent],
    host: { ngSkipHydration: 'true' },
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TestimonialsComponent implements OnInit{
    testimonials: Testimonial[] = [];
    
    constructor(private service:TestimonialService){}
    
    ngOnInit() {
        this.service.getAll().subscribe((testimonials) => {
            this.testimonials = testimonials;
        });
    }
}
