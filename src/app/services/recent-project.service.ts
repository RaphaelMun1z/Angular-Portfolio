import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface RecentProject {
    projectName: string;
    path: string;
}

interface RecentProjects {
    frontend?: RecentProject[];
    backend?: RecentProject[];
}

@Injectable({
    providedIn: 'root'
})

export class RecentProjectService {
    private dataUrl = '/assets/db/recent_projects.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<RecentProjects[]> {
        return this.http.get<RecentProjects[]>(this.dataUrl);
    }
    
    getRecentProjectsByStack(stackName: 'frontend' | 'backend'): Observable<RecentProject[] | undefined> {
        return this.getAll().pipe(
            map((projects) => {
                const group = projects.find((project) => project[stackName]);              
                return group ? group[stackName] : [];
            })
        );
    }
}
