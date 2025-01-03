import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'app-project-card-small',
    standalone: true,
    imports: [IconComponent, CommonModule, RippleModule, ButtonComponent],
    templateUrl: './project-card-small.component.html',
    styleUrl: './project-card-small.component.scss'
})
export class ProjectCardSmallComponent {
    @Input() id!: string;
    @Input() name!: string;
    @Input() proposal!: string;
    @Input() description!: string;
    @Input() stack!: string[];
    @Input() repositoryUrl!: string;
    @Input() projectUrl!: string;
}
