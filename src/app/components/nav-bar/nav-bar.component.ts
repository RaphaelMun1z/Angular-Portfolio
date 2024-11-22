import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RippleModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
