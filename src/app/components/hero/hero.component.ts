import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from "../button/button.component";
import { BaseContainerComponent } from '../base-container/base-container.component';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [RippleModule, ButtonComponent, BaseContainerComponent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    
}
