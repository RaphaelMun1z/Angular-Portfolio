import { Component } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [IconComponent],
    templateUrl: './footer.component.html',
    styleUrls: ["./footer.component.scss", "./footer-responsive.component.scss"]
})
export class FooterComponent {
    
}
