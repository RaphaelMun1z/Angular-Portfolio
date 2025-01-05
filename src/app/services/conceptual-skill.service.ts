import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface ConceptualSkill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

interface GroupedConceptualSkills {
    frontend?: ConceptualSkill[];
    backend?: ConceptualSkill[];
    general?: ConceptualSkill[];
}

interface ConceptualSkillsResponse {
    conceptualSkills: GroupedConceptualSkills;
}

@Injectable({
    providedIn: 'root'
})

export class ConceptualSkillService {
    private dataUrl = '/assets/db/data.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<ConceptualSkill[]> {
        return this.http.get<ConceptualSkill[]>(this.dataUrl);
    }
    
    getByGroup(groupName: 'frontend' | 'backend' | 'general'): Observable<ConceptualSkill[]> {
        return this.http.get<ConceptualSkillsResponse>(this.dataUrl).pipe(
            map((data) => {
                const skills = data.conceptualSkills[groupName];
                return skills || []; 
            })
        );
    }
}
