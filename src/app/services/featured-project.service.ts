import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { ProjectService } from './project.service';

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

@Injectable({
    providedIn: 'root'
})

export class FeaturedProjectService {
    private dataUrl = 'assets/db/featured_projects.json';
    
    constructor(private http: HttpClient, private service: ProjectService) { }

    getAll(): Observable<FeaturedProject[]> {
        return this.http.get<{ id: string, video_url: string }[]>(this.dataUrl).pipe(
            switchMap((featuredProjects) => {
                const projects_id = featuredProjects.map((project) => project.id);

                return this.service.getAll().pipe(
                    map((projects) => 
                        projects.filter((project) => projects_id.includes(project.id))
                    ),
                    map((filteredProjects) => {
                        return filteredProjects.map((project) => {
                            const featuredProject = featuredProjects.find(
                                (fp) => fp.id === project.id
                            );
                            return {
                                id: project.id,
                                project: project,
                                videoUrl: featuredProject ? featuredProject.video_url : ''
                            };
                        });
                    })
                );
            })
        );
    }
}
