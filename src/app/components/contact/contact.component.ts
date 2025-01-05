import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { IconComponent } from "../icon/icon.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [RippleModule, IconComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
}
