import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
    selector: 'app-project-header',
    standalone: true,
    imports: [CommonModule, SkeletonModule],
    templateUrl: './project-header.component.html',
    styleUrls: ["./project-header.component.scss", "./project-header-responsive.component.scss"]
})

export class ProjectHeaderComponent {
    @Input() imagePath! : string;
}
