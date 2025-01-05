import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    private dataUrl = '/assets/db/projects.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<Project[]> {
        return this.http.get<Project[]>(this.dataUrl);
    }
    
    getProjectById(id: string | null): Observable<Project | undefined> {
        return this.getAll().pipe(
            map((projects) => projects.find((project) => project.id === id))
        );
    }
}
