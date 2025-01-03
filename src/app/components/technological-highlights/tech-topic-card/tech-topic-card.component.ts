import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-topic-card',
    standalone: true,
    imports: [],
    templateUrl: './tech-topic-card.component.html',
    styleUrl: './tech-topic-card.component.scss'
})
export class TechTopicCardComponent {
    @Input() name! : string;
    @Input() icon! : string;
    @Input() description! : string;
    @Input() link! : string;
}
