import { CommonModule } from '@angular/common';
import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { IconComponent } from "../../icon/icon.component";

@Component({
    selector: 'app-carousel-skill-card',
    standalone: true,
    imports: [CommonModule, IconComponent],
    templateUrl: './carousel-skill-card.component.html',
    styleUrl: './carousel-skill-card.component.scss'
})

export class CarouselSkillCardComponent {
    @Input() title: string = "";
    @Input() description: string = "";
    @Input() logo: string = "";
    @Input() color: string = "";
}