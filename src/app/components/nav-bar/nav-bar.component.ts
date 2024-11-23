import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterModule, CommonModule, RippleModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    @Input() isScrolled = false;
}
