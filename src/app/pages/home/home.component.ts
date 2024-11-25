import { Component, ElementRef } from '@angular/core';
import { ServicesComponent } from "../../components/services/services.component";
import { AboutComponent } from "../../components/about/about.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { RecentProjectsComponent } from "../../components/recent-projects/recent-projects.component";
import { TechnologicalHighlightsComponent } from '../../components/technological-highlights/technological-highlights.component';
import { ContactComponent } from "../../components/contact/contact.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { DropdownComponent } from "../../components/dropdown/dropdown.component";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ServicesComponent, AboutComponent, TestimonialsComponent, RecentProjectsComponent, TechnologicalHighlightsComponent, ContactComponent, HeroComponent, DropdownComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(private el: ElementRef) {}
    
    ngAfterViewInit() {
        const elementos = this.el.nativeElement.querySelectorAll('.animated');
        
        elementos.forEach((elemento: HTMLElement) => {
            gsap.from(elemento, {
                opacity: 0,
                y: 50, // Translação inicial no eixo Y
                duration: 1,
                scrollTrigger: {
                    trigger: elemento,  // Define o elemento como o gatilho da animação
                    start: 'top 80%',   // Início da animação
                    end: 'top 20%',     // Fim da animação
                    scrub: false,       // Animação ocorre suavemente
                    once: true          // Garante que a animação aconteça apenas uma vez
                }
            });
        });
    }
}
