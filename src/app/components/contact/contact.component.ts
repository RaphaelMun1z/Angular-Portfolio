import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IconComponent } from "../icon/icon.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [RippleModule, AutoCompleteModule, FormsModule, IconComponent, SectionTitleComponent, BaseContainerComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    items: any[] | undefined;
    
    selectedItem: any;
    
    suggestions!: any[];
    
    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}
