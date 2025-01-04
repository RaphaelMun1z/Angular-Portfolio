import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-container.component.html',
  styleUrl: './base-container.component.scss'
})
export class BaseContainerComponent {
    @Input() isHeroSection: boolean = false;
}
