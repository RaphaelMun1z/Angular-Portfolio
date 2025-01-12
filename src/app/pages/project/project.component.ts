import { Component } from '@angular/core';
import { SectionProjectComponent } from "../../components/section-project/section-project.component";

@Component({
    selector: 'app-project',
    standalone: true,
    imports: [SectionProjectComponent],
    templateUrl: './project.component.html',
    styleUrls: ["./project.component.scss", "./project-responsive.component.scss"]
})

export class ProjectComponent {
}
