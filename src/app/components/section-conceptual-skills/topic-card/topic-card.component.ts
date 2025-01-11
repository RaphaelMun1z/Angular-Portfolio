import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'app-topic-card',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './topic-card.component.html',
    styleUrl: './topic-card.component.scss'
})
export class TopicCardComponent {
    @Input() name! : string;
    @Input() icon! : string;
    @Input() description! : string;
    @Input() stack! : string;
}
