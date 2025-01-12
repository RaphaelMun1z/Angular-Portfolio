import { Component } from '@angular/core';
import { SectionPortfolioComponent } from '../../components/section-portfolio/section-portfolio.component';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [SectionPortfolioComponent],
    templateUrl: './portfolio.component.html',
    styleUrls: ["./portfolio.component.scss", "./portfolio-responsive.component.scss"]
})

export class PortfolioComponent {

}