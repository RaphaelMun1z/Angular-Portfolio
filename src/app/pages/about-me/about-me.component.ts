import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionAboutComponent } from '../../components/section-about/section-about.component';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [SectionAboutComponent],
    templateUrl: './about-me.component.html',
    styleUrls: ["./about-me.component.scss", "./about-me-responsive.component.scss"]
})

export class AboutMeComponent implements OnInit, AfterViewInit {
    constructor(private el: ElementRef, private route: ActivatedRoute) {}
    
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
