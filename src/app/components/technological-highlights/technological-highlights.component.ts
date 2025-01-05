import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { register as registerSwiperElements } from 'swiper/element/bundle';
import { TechCardComponent } from './tech-card/tech-card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { TechTopicCardComponent } from './tech-topic-card/tech-topic-card.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ConceptualSkillService } from '../../services/conceptual-skill.service';
import { CommonModule } from '@angular/common';
registerSwiperElements();

interface ConceptualSkill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

@Component({
    selector: 'app-technological-highlights',
    standalone: true,
    imports: [MatIconModule, TechCardComponent, SectionTitleComponent, BaseContainerComponent, TechTopicCardComponent, CarouselComponent, CommonModule],
    templateUrl: './technological-highlights.component.html',
    styleUrl: './technological-highlights.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TechnologicalHighlightsComponent implements OnInit{
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
