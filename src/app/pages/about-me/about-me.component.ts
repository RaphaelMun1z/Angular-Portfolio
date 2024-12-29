import { Component } from '@angular/core';
import { IntroductionComponent } from "../../components/introduction/introduction.component";

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [IntroductionComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
