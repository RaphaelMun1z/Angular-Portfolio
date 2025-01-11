import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-container.component.html',
  styleUrls: ["./base-container.component.scss", "./base-container-responsive.component.scss"]
})
export class BaseContainerComponent {
    @Input() isHeroSection = false;
}
