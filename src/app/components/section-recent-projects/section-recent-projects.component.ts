import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { VerticalCarouselComponent } from "../vertical-carousel/vertical-carousel.component";
import { ProjectService } from '../../services/project.service';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { RecentProjectService } from '../../services/recent-project.service';
import { SkeletonModule } from 'primeng/skeleton';
import { ProjectCardResumeComponent } from "../project-card-resume/project-card-resume.component";

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

interface RecentProject {
    projectName: string;
    path: string;
}

@Component({
    selector: 'app-section-recent-projects',
    standalone: true,
    imports: [VerticalCarouselComponent, SkeletonModule, SectionTitleComponent, CommonModule, ProjectCardResumeComponent],
    templateUrl: './section-recent-projects.component.html',
    styleUrls: ["./section-recent-projects.component.scss", "./section-recent-projects-responsive.component.scss"],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SectionRecentProjectsComponent implements OnInit {
    projects : Project[] = [];
    emphasisFrontendProject : RecentProject[] = [];
    emphasisBackendProject : RecentProject[] = [];
    
    constructor(private service: ProjectService, private recentProjectsService: RecentProjectService){}
    
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            if (response) {
                this.projects = response;
            }
        })

        this.recentProjectsService.getRecentProjectsByStack("frontend").subscribe((response) => {
            if (response) {
                this.emphasisFrontendProject = response;
            }
        })

        this.recentProjectsService.getRecentProjectsByStack("backend").subscribe((response) => {
            if (response) {
                this.emphasisBackendProject = response;
            }
        })
    }
}
