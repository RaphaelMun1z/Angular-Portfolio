import { Component } from '@angular/core';
import { PortfolioProjectCardComponent } from '../../components/portfolio-project-card/portfolio-project-card.component';
import { PortfolioProjectsHeaderComponent } from "../../components/portfolio-projects-header/portfolio-projects-header.component";
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [PortfolioProjectCardComponent, PortfolioProjectsHeaderComponent, CommonModule, SectionTitleComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    projects: any = [];

    constructor(private service:ProjectService){
        this.projects = service.getAll();
    }
}
