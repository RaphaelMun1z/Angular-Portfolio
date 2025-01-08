import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { IconComponent } from "../icon/icon.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";

@Component({
    selector: 'app-section-contact-details',
    standalone: true,
    imports: [RippleModule, IconComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './section-contact-details.component.html',
    styleUrl: './section-contact-details.component.scss'
})
export class SectionContactDetailsComponent {
}
