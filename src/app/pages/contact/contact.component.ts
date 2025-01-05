import { Component } from '@angular/core';
import { ContactComponent } from "../../components/contact/contact.component";
import { SectionTitleComponent } from "../../components/section-title/section-title.component";
import { BaseContainerComponent } from "../../components/base-container/base-container.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactComponent, SectionTitleComponent, BaseContainerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent {

}
