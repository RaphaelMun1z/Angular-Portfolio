import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterModule, CommonModule, RippleModule, IconComponent],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    @Input() isScrolled = false;
}
