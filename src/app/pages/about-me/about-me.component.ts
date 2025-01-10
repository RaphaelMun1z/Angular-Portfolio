import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { BaseContainerComponent } from "../../components/base-container/base-container.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [SectionTitleComponent, BaseContainerComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements OnInit{
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit() {
        this.route.fragment.subscribe(fragment => {
            if (fragment) {
                const element = document.getElementById(fragment);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 1000)
                }
            }
        });
    }
}
