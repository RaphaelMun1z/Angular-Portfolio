import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../../components/icon/icon.component";
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";

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
    imports: [IconComponent, CommonModule, SectionTitleComponent],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
    id!: string | null;
    project!: Project;
    
    constructor(private service:ProjectService, private route: ActivatedRoute){}
    
    ngOnInit() {
        this.route.paramMap.subscribe(
            value => this.id = value.get("id")
        )

        const projectResponse : Project = this.service.getProjectById(this.id);
        this.project.id = projectResponse.id;
        this.project.name = projectResponse.name;
        this.project.stack = projectResponse.stack;
        this.project.proposal = projectResponse.proposal;
        this.project.description = projectResponse.description;
        this.project.repositoryUrl = projectResponse.repositoryUrl;
        this.project.projectUrl = projectResponse.projectUrl;
        this.project.imageUrl = projectResponse.imageUrl;
    }
}
