import { Component, HostListener, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { transitionAnimation } from './components/animations/transition'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, NavBarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [transitionAnimation]
})

export class AppComponent implements OnInit {
    title = 'portfolio';
    isScrolled = false;
    
    constructor(private primengConfig: PrimeNGConfig, private router: Router) {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
    
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.isScrolled = window.scrollY > 100;
    }
    
    public getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
