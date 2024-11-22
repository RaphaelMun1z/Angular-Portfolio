import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() imageUrl:string = "";
    @Input() text:string = "";
    @Input() name:string = "";
    @Input() position:string = "";
}
