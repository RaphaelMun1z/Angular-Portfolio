import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from '../button/button.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
    selector: 'app-project-card-resume',
    standalone: true,
    imports: [IconComponent, CommonModule, RippleModule, ButtonComponent, TruncatePipe],
    templateUrl: './project-card-resume.component.html',
    styleUrl: './project-card-resume.component.scss',
    changeDetection: ChangeDetectionStrategy.Default
})

export class ProjectCardResumeComponent {
    @Input() id!: string;
    @Input() name!: string;
    @Input() proposal!: string;
    @Input() description!: string;
    @Input() stack!: string[];
    @Input() repositoryUrl!: string;
    @Input() projectUrl!: string;
}
