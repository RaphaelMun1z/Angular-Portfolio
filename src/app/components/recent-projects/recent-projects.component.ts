import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { VerticalCarouselComponent } from "../vertical-carousel/vertical-carousel.component";

@Component({
    selector: 'app-recent-projects',
    standalone: true,
    imports: [RippleModule, VerticalCarouselComponent],
    templateUrl: './recent-projects.component.html',
    styleUrl: './recent-projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecentProjectsComponent {

}
