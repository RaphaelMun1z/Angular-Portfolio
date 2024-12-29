import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { PortfolioProjectCardComponent } from '../../components/portfolio-project-card/portfolio-project-card.component';
import { PortfolioProjectsHeaderComponent } from "../../components/portfolio-projects-header/portfolio-projects-header.component";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [RippleModule, PortfolioProjectCardComponent, PortfolioProjectsHeaderComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    
}
