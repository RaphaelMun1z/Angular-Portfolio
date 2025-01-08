import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SectionSkillsComponent } from "../../components/section-skills/section-skills.component";
import { SectionIntroductionComponent } from "../../components/section-introduction/section-introduction.component";
import { SectionTestimonialsComponent } from "../../components/section-testimonials/section-testimonials.component";
import { SectionRecentProjectsComponent } from "../../components/section-recent-projects/section-recent-projects.component";
import { SectionConceptualSkillsComponent } from '../../components/section-conceptual-skills/section-conceptual-skills.component';
import { SectionContactDetailsComponent } from "../../components/section-contact-details/section-contact-details.component";
import { SectionHeroComponent } from "../../components/section-hero/section-hero.component";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SectionHeroComponent,
        SectionIntroductionComponent, 
        SectionSkillsComponent, 
        SectionRecentProjectsComponent, 
        SectionConceptualSkillsComponent, 
        SectionTestimonialsComponent, 
        SectionContactDetailsComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
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
