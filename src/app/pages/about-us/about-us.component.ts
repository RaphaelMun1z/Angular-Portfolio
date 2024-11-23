import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
