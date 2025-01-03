import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CarouselTestimonialCardComponent } from "../carousel/carousel-testimonial-card/carousel-testimonial-card.component";
import { SectionTitleComponent } from "../section-title/section-title.component";

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
    imports: [CarouselComponent, CarouselTestimonialCardComponent, SectionTitleComponent],
    host: { ngSkipHydration: 'true' },
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TestimonialsComponent {

}
