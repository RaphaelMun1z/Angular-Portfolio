import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { VerticalCarouselComponent } from "../vertical-carousel/vertical-carousel.component";
import { CardSmallComponent } from "./card-small/card-small.component";
import { ProjectService } from '../../services/project.service';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../carousel/carousel.component";

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
    selector: 'app-section-recent-projects',
    standalone: true,
    imports: [VerticalCarouselComponent, CardSmallComponent, SectionTitleComponent, CommonModule, CarouselComponent],
    templateUrl: './section-recent-projects.component.html',
    styleUrl: './section-recent-projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SectionRecentProjectsComponent implements OnInit {
    projects : Project[] = [];
    
    constructor(private service: ProjectService){}
    
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            if (response) {
                this.projects = response;
            }
        })
    }

    emphasisProjectImage = [
        [
            {
                "projectName": "Netflix",
                "path": "netflix-1.png"
            },
            {
                "projectName": "Netflix",
                "path": "netflix-2.png"
            },
            {
                "projectName": "Netflix",
                "path": "netflix-3.png"
            }
        ],
        [
            {
                "projectName": "Coffee XP",
                "path": "coffeexp-1.png"
            },
            {
                "projectName": "Portfolio",
                "path": "portfolio-1.png"
            },
            {
                "projectName": "Reactgram",
                "path": "reactgram-1.png"
            },
        ]
    ]
}
