import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HomeComponent, NavBarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
    title = 'portfolio'; 
    constructor(private primengConfig: PrimeNGConfig) {}
    
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
