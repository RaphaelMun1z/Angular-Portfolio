import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Skill {
    id: string;
    name: string;
    icon: string;
    description: string;
}

interface Skills {
    skills: Skill[];
}

@Injectable({
    providedIn: 'root'
})

export class SkillService {
    private dataUrl = '/assets/db/data.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<Skill[]> {
        return this.http.get<Skill[]>(this.dataUrl);
    }

    getAllGroupFormat(): Observable<Skill[][]> {
        return this.http.get<Skills>(this.dataUrl).pipe(
            map((data) => {
                const grouped: Skill[][] = [];
                for (let ii = 0; ii < data.skills.length; ii += 2) {
                    grouped.push(data.skills.slice(ii, ii + 2));
                }
                return grouped;
            })
        );
    }
}
