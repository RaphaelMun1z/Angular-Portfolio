import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();
import { CardComponent } from './card/card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { TopicCardComponent } from './topic-card/topic-card.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ConceptualSkillService } from '../../services/conceptual-skill.service';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

interface ConceptualSkill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

@Component({
    selector: 'app-section-conceptual-skills',
    standalone: true,
    imports: [MatIconModule, SkeletonModule, CardComponent, SectionTitleComponent, BaseContainerComponent, TopicCardComponent, CarouselComponent, CommonModule],
    templateUrl: './section-conceptual-skills.component.html',
    styleUrls: ["./section-conceptual-skills.component.scss", "./section-conceptual-skills-responsive.component.scss"],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SectionConceptualSkillsComponent implements OnInit{
    frontendConceptualSkills: ConceptualSkill[] = [];
    backendConceptualSkills: ConceptualSkill[] = [];
    generalConceptualSkills: ConceptualSkill[] = [];
    
    constructor(private service:ConceptualSkillService){}
    
    ngOnInit() {
        this.service.getByGroup("frontend").subscribe((skills) => {
            this.frontendConceptualSkills = skills || [];
        });
        
        this.service.getByGroup("backend").subscribe((skills) => {
            this.backendConceptualSkills = skills || [];
        });
        
        this.service.getByGroup("general").subscribe((skills) => {
            this.generalConceptualSkills = skills || [];
        });
    }
}
