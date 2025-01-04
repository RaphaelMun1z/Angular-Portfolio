import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CarouselSkillCardComponent } from '../carousel/carousel-skill-card/carousel-skill-card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { SkillService } from '../../services/skill.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, CarouselComponent, CarouselSkillCardComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent implements OnInit{
    skills: any[][] = [];
    
    constructor(private service:SkillService){}
    
    ngOnInit() {
        this.service.getAllGroupFormat().subscribe((groupedSkills) => {
            this.skills = groupedSkills;
        });
    }
    
    breakpoints: any = {
        320: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 }
    };
}
