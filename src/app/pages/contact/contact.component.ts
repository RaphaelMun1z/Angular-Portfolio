import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SectionContactComponent } from "../../components/section-contact/section-contact.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [SectionContactComponent],
    templateUrl: './contact.component.html',
    styleUrls: ["./contact.component.scss", "./contact-responsive.component.scss"]
})

export class ContactPageComponent implements AfterViewInit {
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        const elementos = this.el.nativeElement.querySelectorAll('.animated');
        
        elementos.forEach((elemento: HTMLElement) => {
            gsap.from(elemento, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: elemento,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                    once: true
                }
            });
        });
    }
}
