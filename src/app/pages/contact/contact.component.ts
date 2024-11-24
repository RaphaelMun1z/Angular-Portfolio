import { Component } from '@angular/core';
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent {

}
