import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConceptualSkillService {
    private dataUrl = '/assets/db/data.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<any> {
        return this.http.get<any>(this.dataUrl);
    }
    
    getByGroup<T>(groupName: string): Observable<T[]> {
        return this.http.get<any>(this.dataUrl).pipe(
            map(data => data.conceptual_skills.find((group: any) => groupName in group)?.[groupName] || [])
        );
    }
}
