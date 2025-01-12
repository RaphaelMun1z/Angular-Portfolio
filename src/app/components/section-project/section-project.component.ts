import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { ProjectHeaderComponent } from '../project-header/project-header.component';
import { IconComponent } from '../icon/icon.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BaseContainerComponent } from '../base-container/base-container.component';
import { RecommendedProjectsComponent } from '../recommended-projects/recommended-projects.component';
import { ButtonComponent } from '../button/button.component';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

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
    selector: 'app-section-project',
    standalone: true,
    imports: [TopicComponent, ProjectHeaderComponent, IconComponent, SkeletonModule, CommonModule, SectionTitleComponent, BaseContainerComponent, RecommendedProjectsComponent, ButtonComponent],
    templateUrl: './section-project.component.html',
    styleUrls: ["./section-project.component.scss"],
    changeDetection: ChangeDetectionStrategy.Default
})

export class SectionProjectComponent implements OnInit{
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
                setTimeout(() => {
                    this.project = response;
                }, 1000)
            }
        });
        
        this.service.getRelatedProjects(id).subscribe((response) => {
            if (response) this.relatedProjects = response;
        });
    }
}
