import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})

export class SkillService {
    private dataUrl = '/assets/db/skills.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<Skill[]> {
        return this.http.get<Skill[]>(this.dataUrl);
    }
    
    getAllGroupFormat(): Observable<Skill[][]> {
        return this.getAll().pipe(
            map((data) => {
                const grouped: Skill[][] = [];
                for (let ii = 0; ii < data.length; ii += 2) {
                    grouped.push(data.slice(ii, ii + 2));
                }
                return grouped;
            })
        );
    }
}
