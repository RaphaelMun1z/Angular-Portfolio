import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerticalCarouselComponent } from "../vertical-carousel/vertical-carousel.component";
import { ProjectCardSmallComponent } from "./project-card-small/project-card-small.component";
import { ProjectService } from '../../services/project.service';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-recent-projects',
    standalone: true,
    imports: [VerticalCarouselComponent, ProjectCardSmallComponent, SectionTitleComponent, CommonModule],
    templateUrl: './recent-projects.component.html',
    styleUrl: './recent-projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecentProjectsComponent {
    projects : any = [];
    
    constructor(private service: ProjectService){
        this.projects = this.service.getAll();
    }
    
    emphasisProjectImage = [
        [
            {
                "projectName": "Netflix",
                "path": "banner-netflix.png"
            },
            {
                "projectName": "Dealership",
                "path": "banner-dealership.png"
            },
            {
                "projectName": "LeaseInsight",
                "path": "banner-leaseInsight.png"
            }
        ],
        [
            {
                "projectName": "ReactGram",
                "path": "banner-reactGram.png"
            },
            {
                "projectName": "Netflix",
                "path": "netflix-1.png"
            },
            {
                "projectName": "Netflix",
                "path": "netflix-2.png"
            },
        ]
    ]
}
