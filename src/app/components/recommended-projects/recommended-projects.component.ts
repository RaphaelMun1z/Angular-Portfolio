import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { SkeletonModule } from 'primeng/skeleton';
import { ProjectCardResumeComponent } from '../project-card-resume/project-card-resume.component';
registerSwiperElements();

interface Project {
    id: string;
    name: string;
    stack: string[];
    proposal: string;
    description: string;
    repositoryUrl: string;
    projectUrl: string;
    imageUrl: string;
}

@Component({
    selector: 'app-recommended-projects',
    standalone: true,
    imports: [SectionTitleComponent, CarouselComponent, CommonModule, SkeletonModule, ProjectCardResumeComponent],
    templateUrl: './recommended-projects.component.html',
    styleUrl: './recommended-projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RecommendedProjectsComponent{
    @Input() relatedProjects : Project[] = [];
}
