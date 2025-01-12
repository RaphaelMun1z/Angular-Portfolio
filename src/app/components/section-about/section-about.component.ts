import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BaseContainerComponent } from '../base-container/base-container.component';
import { TopicComponent } from '../topic/topic.component';
import { AboutHeaderComponent } from '../about-header/about-header.component';

@Component({
  selector: 'app-section-about',
  standalone: true,
  imports: [SectionTitleComponent, BaseContainerComponent, TopicComponent, AboutHeaderComponent],
  templateUrl: './section-about.component.html',
  styleUrl: './section-about.component.scss'
})
export class SectionAboutComponent {

}
