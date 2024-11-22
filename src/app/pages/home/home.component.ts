import { Component } from '@angular/core';
import { ServicesComponent } from "../../components/services/services.component";
import { AboutComponent } from "../../components/about/about.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { RecentProjectsComponent } from "../../components/recent-projects/recent-projects.component";
import { TechnologicalHighlightsComponent } from '../../components/technological-highlights/technological-highlights.component';
import { ContactComponent } from "../../components/contact/contact.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { DropdownComponent } from "../../components/dropdown/dropdown.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ServicesComponent, AboutComponent, TestimonialsComponent, RecentProjectsComponent, TechnologicalHighlightsComponent, ContactComponent, HeroComponent, DropdownComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    
}
