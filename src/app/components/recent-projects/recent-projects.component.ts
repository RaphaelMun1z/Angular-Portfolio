import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerticalCarouselComponent } from "../vertical-carousel/vertical-carousel.component";
import { ProjectCardSmallComponent } from "./project-card-small/project-card-small.component";
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'app-recent-projects',
    standalone: true,
    imports: [VerticalCarouselComponent, ProjectCardSmallComponent],
    templateUrl: './recent-projects.component.html',
    styleUrl: './recent-projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecentProjectsComponent {
    projects : any = [];

    constructor(private service: ProjectService){
        this.projects = this.service.getAll();
    }
}
