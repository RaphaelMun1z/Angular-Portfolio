import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrls: ["./section-title.component.scss", "./section-title-responsive.component.scss"]
})
export class SectionTitleComponent {
    @Input() text! : string;
    @Input() emphasis! : string;
}
