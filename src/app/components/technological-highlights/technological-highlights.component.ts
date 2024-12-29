import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { register as registerSwiperElements } from 'swiper/element/bundle';
import { TechCardComponent } from './tech-card/tech-card.component';
registerSwiperElements();

@Component({
    selector: 'app-technological-highlights',
    standalone: true,
    imports: [MatIconModule, TechCardComponent],
    templateUrl: './technological-highlights.component.html',
    styleUrl: './technological-highlights.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TechnologicalHighlightsComponent {

}
