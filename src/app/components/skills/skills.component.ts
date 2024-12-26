import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CarouselSkillCardComponent } from '../carousel/carousel-skill-card/carousel-skill-card.component';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, CarouselComponent, CarouselSkillCardComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent {
}
