import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { SkillService } from '../../services/skill.service';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { SkeletonModule } from 'primeng/skeleton';

interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

@Component({
    selector: 'app-section-skills',
    standalone: true,
    imports: [CommonModule, SkeletonModule, CarouselComponent, CarouselCardComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './section-skills.component.html',
    styleUrls: ["./section-skills.component.scss", "./section-skills-responsive.component.scss"],
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
}
