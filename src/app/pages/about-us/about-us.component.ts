import { Component } from '@angular/core';
import { IntroductionComponent } from "../../components/introduction/introduction.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [IntroductionComponent],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
