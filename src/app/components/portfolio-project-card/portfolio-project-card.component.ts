import { Component, Input } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { IconComponent } from "../icon/icon.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from "../../pipes/truncate.pipe";
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-portfolio-project-card',
    standalone: true,
    imports: [RippleModule, IconComponent, RouterModule, CommonModule, TruncatePipe, ButtonComponent],
    templateUrl: './portfolio-project-card.component.html',
    styleUrl: './portfolio-project-card.component.scss'
})

export class PortfolioProjectCardComponent {
    @Input() id! : string;
    @Input() name! : string;
    @Input() stack! : string[];
    @Input() proposal! : string;
    @Input() imageUrl! : string;
}
