import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, CarouselComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
