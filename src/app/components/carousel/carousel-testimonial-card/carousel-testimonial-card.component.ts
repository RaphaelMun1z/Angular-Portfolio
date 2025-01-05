import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-carousel-testimonial-card',
    standalone: true,
    imports: [],
    templateUrl: './carousel-testimonial-card.component.html',
    styleUrl: './carousel-testimonial-card.component.scss'
})
export class CarouselTestimonialCardComponent {
    @Input() imageUrl!: string;
    @Input() text!: string;
    @Input() name!: string;
    @Input() position!: string;
}
