import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss'
})
export class IconComponent {
    @Input() name: string = "";
    @Input() size: string = "50px";
}
