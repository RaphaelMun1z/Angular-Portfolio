import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-introduction',
    standalone: true,
    imports: [RippleModule],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
}
