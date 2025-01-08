import { Component } from '@angular/core';
import { SectionIntroductionComponent } from "../../components/section-introduction/section-introduction.component";
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { BaseContainerComponent } from "../../components/base-container/base-container.component";

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [SectionIntroductionComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
