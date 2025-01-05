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

        this.service.getProjectById(this.id).subscribe((response) => {
            if (response) {
                this.project.id = response.id;
                this.project.name = response.name;
                this.project.stack = response.stack;
                this.project.proposal = response.proposal;
                this.project.description = response.description;
                this.project.repositoryUrl = response.repositoryUrl;
                this.project.projectUrl = response.projectUrl;
                this.project.imageUrl = response.imageUrl;
            }
        });
    }
}
