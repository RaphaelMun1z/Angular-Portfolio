import { Component, Input } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'app-portfolio-project-card',
    standalone: true,
    imports: [RippleModule, IconComponent],
    templateUrl: './portfolio-project-card.component.html',
    styleUrl: './portfolio-project-card.component.scss'
})
export class PortfolioProjectCardComponent {
    @Input() name : string = "";
    @Input() proposal : string = "";
    @Input() image : string = "";
}
