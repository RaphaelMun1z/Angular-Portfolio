import { Component } from '@angular/core';
import { ContactComponent } from "../../components/contact/contact.component";
import { SectionTitleComponent } from "../../components/section-title/section-title.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactComponent, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent {

}
