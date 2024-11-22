import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-recent-projects',
    standalone: true,
    imports: [RippleModule],
    templateUrl: './recent-projects.component.html',
    styleUrl: './recent-projects.component.scss'
})
export class RecentProjectsComponent {
    
}
