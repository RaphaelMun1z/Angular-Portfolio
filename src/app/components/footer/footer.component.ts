import { Component } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [IconComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    
}
