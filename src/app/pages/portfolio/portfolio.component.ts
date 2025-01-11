import { Component, OnInit } from '@angular/core';
import { PortfolioProjectCardComponent } from '../../components/portfolio-project-card/portfolio-project-card.component';
import { PortfolioProjectsHeaderComponent } from "../../components/portfolio-projects-header/portfolio-projects-header.component";
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";
import { BaseContainerComponent } from "../../components/base-container/base-container.component";

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
    selector: 'app-portfolio',
    standalone: true,
    imports: [PortfolioProjectCardComponent, PortfolioProjectsHeaderComponent, CommonModule, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './portfolio.component.html',
    styleUrls: ["./portfolio.component.scss", "./portfolio-responsive.component.scss"]
})

export class PortfolioComponent implements OnInit{
    projects: Project[] = [];

    constructor(private service:ProjectService){}

    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            if (response) {
                this.projects = response;
            }
        })
    }
}
