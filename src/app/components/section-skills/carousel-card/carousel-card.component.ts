import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from "../../icon/icon.component";

@Component({
    selector: 'app-carousel-card',
    standalone: true,
    imports: [CommonModule, IconComponent],
    templateUrl: './carousel-card.component.html',
    styleUrl: './carousel-card.component.scss'
})

export class CarouselCardComponent {
    @Input() title!: string;
    @Input() description!: string;
    @Input() logo!: string;
    @Input() color!: string;
}