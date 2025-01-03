import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { register as registerSwiperElements } from 'swiper/element/bundle';
import { TechCardComponent } from './tech-card/tech-card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { TechTopicCardComponent } from './tech-topic-card/tech-topic-card.component';
import { CarouselComponent } from '../carousel/carousel.component';
registerSwiperElements();

@Component({
    selector: 'app-technological-highlights',
    standalone: true,
    imports: [MatIconModule, TechCardComponent, SectionTitleComponent, BaseContainerComponent, TechTopicCardComponent, CarouselComponent],
    templateUrl: './technological-highlights.component.html',
    styleUrl: './technological-highlights.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TechnologicalHighlightsComponent {

}
