import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import {MatButtonModule} from '@angular/material/button';
import {
    MatDialog
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from "../button/button.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";
import { FeaturedProjectService } from '../../services/featured-project.service';
import { CommonModule } from '@angular/common';

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

interface FeaturedProject {
    id: string;
    project: Project;
    videoUrl: string;
}

@Component({
    selector: 'app-section-introduction',
    standalone: true,
    imports: [RippleModule, RouterModule, MatButtonModule, ButtonComponent, SectionTitleComponent, BaseContainerComponent, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './section-introduction.component.html',
    styleUrl: './section-introduction.component.scss'
})

export class SectionIntroductionComponent implements OnInit{
    readonly dialog = inject(MatDialog);
    
    openDialog(projectName: string, source: string) {
        this.dialog.open(ModalComponent, {
            data: { 
                projectName, source
            }
        });
    }
    
    projects: FeaturedProject[] = [];
    
    constructor(private service:FeaturedProjectService){}
    
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            if (response) {
                this.projects = response;
                console.log(response)
            }
        })
    }
}
