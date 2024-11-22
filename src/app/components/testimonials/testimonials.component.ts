import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardComponent } from "./card/card.component";
import { TestimonialService } from '../../service/testimonialservice';

interface Testimonial {
    id:string;
    imageUrl:string;
    name: string;
    text: string;
    position: string;
}

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CardComponent, CarouselModule, ButtonModule, TagModule],
    providers: [TestimonialService],
    host: { ngSkipHydration: 'true' },
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})

export class TestimonialsComponent implements OnInit {
    testimonials: Testimonial[] | any;
    
    responsiveOptions: any[] | undefined;
    
    constructor(private testimonialService: TestimonialService) {}
    
    ngOnInit() {  
        this.testimonialService.getTestimonials().then((testimonials) => {
            this.testimonials = testimonials;
        });    
        
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}
