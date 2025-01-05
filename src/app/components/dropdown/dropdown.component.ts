import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    host: { ngSkipHydration: 'true' }
})
export class DropdownComponent  implements OnInit {
    responsiveOptions: any[] | undefined;
    
    ngOnInit() {      
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}
