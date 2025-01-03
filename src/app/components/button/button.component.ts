import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [RouterModule, RippleModule, CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input() text! : string;
    @Input() icon! : string;
    @Input() redirectTo! : string;
    @Input() redirectParam! : string;
    @Input() styleType : number = 0;
}
