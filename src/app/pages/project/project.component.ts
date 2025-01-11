import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IconComponent } from "../../components/icon/icon.component";
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";
import { BaseContainerComponent } from "../../components/base-container/base-container.component";
import { RecommendedProjectsComponent } from "../../components/recommended-projects/recommended-projects.component";
import { ButtonComponent } from "../../components/button/button.component";
import { SkeletonModule } from 'primeng/skeleton';

interface Project {
    id: string;
    name: string;
    stack: string[];
    proposal: string;
    description: string;
    repositoryUrl: string;
    projectUrl: string;
    imageUrl: string;
}

@Component({
    selector: 'app-project',
    standalone: true,
    imports: [IconComponent, SkeletonModule, CommonModule, SectionTitleComponent, BaseContainerComponent, RecommendedProjectsComponent, ButtonComponent],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
    changeDetection: ChangeDetectionStrategy.Default,
})

export class ProjectComponent implements OnInit{
    project: Project = {
        id: undefined as unknown as string,
        name: undefined as unknown as string,
        stack: undefined as unknown as string[],
        proposal: undefined as unknown as string,
        description: undefined as unknown as string,
        repositoryUrl: undefined as unknown as string,
        projectUrl: undefined as unknown as string,
        imageUrl: undefined as unknown as string
    };
    relatedProjects!: Project[];
    
    constructor(private service: ProjectService, private route: ActivatedRoute){}
    
    ngOnInit(){
        this.route.paramMap.subscribe(
            value => {
                this.loadResource(value.get("id"))
            }
        )
    }
    
    loadResource(id: string | null){
        this.service.getProjectById(id).subscribe((response) => {
            if (response) {
                this.project = response;
            }
        });
        
        this.service.getRelatedProjects(id).subscribe((response) => {
            if (response) this.relatedProjects = response;
        });
    }
}
