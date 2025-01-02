import { Component } from '@angular/core';
import { IconComponent } from "../../components/icon/icon.component";
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project',
    standalone: true,
    imports: [IconComponent, CommonModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {
    private id: string | null = "0";
    
    name! : string;
    stack! : string[];
    proposal! : string; 
    description! : string;
    repositoryUrl! : string;
    projectUrl! : string;
    imageUrl! : string; 
    
    constructor(private service: ProjectService, private route: ActivatedRoute){}
    
    ngOnInit(): void{
        this.route.paramMap.subscribe(
            value => this.id = value.get("id")
        )
        
        this.setValuesToComponent(this.id);
    }
    
    setValuesToComponent(id: string | null){
        const result = this.service.getProjectById(id);
        
        this.name = result.name;
        this.stack = result.stack;
        this.proposal = result.proposal;
        this.description = result.description;
        this.repositoryUrl = result.repositoryUrl;
        this.projectUrl = result.projectUrl;
        this.imageUrl = result.imageUrl;
    }
}
