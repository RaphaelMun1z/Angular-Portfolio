import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from "../button/button.component";
import { BaseContainerComponent } from '../base-container/base-container.component';

@Component({
    selector: 'app-section-hero',
    standalone: true,
    imports: [RippleModule, ButtonComponent, BaseContainerComponent],
    templateUrl: './section-hero.component.html',
    styleUrls: ["./section-hero.component.scss", "./section-hero-responsive.scss"]
})
export class SectionHeroComponent {
    
}
