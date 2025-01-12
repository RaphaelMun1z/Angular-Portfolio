import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterModule, CommonModule, RippleModule, IconComponent],
    templateUrl: './nav-bar.component.html',
    styleUrls: ["./nav-bar.component.scss", "./nav-bar-responsive.component.scss"],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavBarComponent implements OnInit{
    @Input() isScrolled = false;
    isMobile = true;
    @Input() isOpen = false;
    
    ngOnInit(): void {
        this.checkScreenSize();
    }
    
    toggleMenu(){
        this.isOpen = !this.isOpen;
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
      this.checkScreenSize();
    }
    
    private checkScreenSize(): void {
        this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    }

    redirectTo(site: string){
        if(site === "github"){
            window.open("https://github.com/RaphaelMun1z", "_blank");
        }else if(site === "linkedin"){
            window.open("https://www.linkedin.com/in/raphael-muniz-7119911a2/", "_blank");
        }
    }
}
