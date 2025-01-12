import { Component } from '@angular/core';
import { SectionContactDetailsComponent } from '../section-contact-details/section-contact-details.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BaseContainerComponent } from '../base-container/base-container.component';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [SectionContactDetailsComponent, SectionTitleComponent, BaseContainerComponent],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss'
})

export class SectionContactComponent {

}
