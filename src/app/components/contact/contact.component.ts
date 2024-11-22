import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [RippleModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    
}
