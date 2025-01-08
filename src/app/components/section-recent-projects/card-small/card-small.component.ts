import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'app-card-small',
    standalone: true,
    imports: [IconComponent, CommonModule, RippleModule, ButtonComponent],
    templateUrl: './card-small.component.html',
    styleUrl: './card-small.component.scss'
})
export class CardSmallComponent {
    @Input() id!: string;
    @Input() name!: string;
    @Input() proposal!: string;
    @Input() description!: string;
    @Input() stack!: string[];
    @Input() repositoryUrl!: string;
    @Input() projectUrl!: string;
}
