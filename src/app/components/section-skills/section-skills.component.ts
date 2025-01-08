import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CarouselSkillCardComponent } from '../carousel/carousel-skill-card/carousel-skill-card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { SkillService } from '../../services/skill.service';

interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

@Component({
    selector: 'app-section-skills',
    standalone: true,
    imports: [CommonModule, CarouselComponent, CarouselSkillCardComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './section-skills.component.html',
    styleUrl: './section-skills.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SectionSkillsComponent implements OnInit{
    skills: Skill[][] = [];
    
    constructor(private service:SkillService){}

    ngOnInit() {
        this.service.getAllGroupFormat().subscribe((response) => {
            if (response) {
                this.skills = response;
            }
        })
    }
    
    breakpoints: unknown = {
        320: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 }
    };
}
