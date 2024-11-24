import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [RippleModule, AutoCompleteModule, FormsModule],
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
