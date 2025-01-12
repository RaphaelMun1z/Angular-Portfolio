import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface ConceptualSkill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

interface ConceptualSkills {
    frontend?: ConceptualSkill[];
    backend?: ConceptualSkill[];
    general?: ConceptualSkill[];
}

@Injectable({
    providedIn: 'root'
})

export class ConceptualSkillService {
    private dataUrl = 'assets/db/conceptual_skills.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<ConceptualSkills[]> {
        return this.http.get<ConceptualSkills[]>(this.dataUrl);
    }
    
    getByGroup(groupName: 'frontend' | 'backend' | 'general'): Observable<ConceptualSkill[] | undefined> {
        return this.getAll().pipe(
            map((conceptualSkillsArray) => {
                const group = conceptualSkillsArray.find((obj) => obj[groupName]);
                return group ? group[groupName] : [];
            })
        );
    }
}
