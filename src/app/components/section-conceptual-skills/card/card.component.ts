import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ["./card.component.scss", "./card-responsive.component.scss"]
})

export class CardComponent {
    @Input() title! : string;
    @Input() description! : string;
    @Input() icon! : string;
}
