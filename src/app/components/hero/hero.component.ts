import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [RippleModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    
}
