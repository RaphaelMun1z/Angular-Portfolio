import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { PortfolioProjectCardComponent } from '../portfolio-project-card/portfolio-project-card.component';
import { PortfolioProjectsHeaderComponent } from '../portfolio-projects-header/portfolio-projects-header.component';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BaseContainerComponent } from '../base-container/base-container.component';

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
    selector: 'app-section-portfolio',
    standalone: true,
    imports: [PortfolioProjectCardComponent, PortfolioProjectsHeaderComponent, CommonModule, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './section-portfolio.component.html',
    styleUrl: './section-portfolio.component.scss'
})

export class SectionPortfolioComponent implements OnInit{
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
