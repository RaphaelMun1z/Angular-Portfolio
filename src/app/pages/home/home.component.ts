import { Component, ElementRef } from '@angular/core';
import { SkillsComponent } from "../../components/skills/skills.component";
import { IntroductionComponent } from "../../components/introduction/introduction.component";
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
    imports: [SkillsComponent, IntroductionComponent, TestimonialsComponent, RecentProjectsComponent, TechnologicalHighlightsComponent, ContactComponent, HeroComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        const elementos = this.el.nativeElement.querySelectorAll('.animated');

        elementos.forEach((elemento: HTMLElement) => {
            gsap.from(elemento, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: elemento,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                    once: true
                }
            });
        });
    }
}
