import { Component } from '@angular/core';
import { IntroductionComponent } from "../../components/introduction/introduction.component";
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [IntroductionComponent, SectionTitleComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
