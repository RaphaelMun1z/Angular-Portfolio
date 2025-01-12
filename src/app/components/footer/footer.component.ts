import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './footer.component.html',
    styleUrls: ["./footer.component.scss", "./footer-responsive.component.scss"]
})
export class FooterComponent {
    redirectTo(site: string){
        if(site === "github"){
            window.open("https://github.com/RaphaelMun1z", "_blank");
        }else if(site === "linkedin"){
            window.open("https://www.linkedin.com/in/raphael-muniz-7119911a2/", "_blank");
        }
    }
}
