import { Component } from '@angular/core';
import { SectionContactDetailsComponent } from "../../components/section-contact-details/section-contact-details.component";
import { SectionTitleComponent } from "../../components/section-title/section-title.component";
import { BaseContainerComponent } from "../../components/base-container/base-container.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionContactDetailsComponent, SectionTitleComponent, BaseContainerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent {

}
