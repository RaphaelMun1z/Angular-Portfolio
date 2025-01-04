import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SkillService {
    private dataUrl = '/assets/db/data.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<any> {
        return this.http.get<any>(this.dataUrl);
    }
    
    getAllGroupFormat<T>(): Observable<T[][]> {
        return this.getAll().pipe(
            map((data: any) => {
                const grouped: T[][] = [];
                for (let ii = 0; ii < data.skills.length; ii += 2) {
                    grouped.push(data.skills.slice(ii, ii + 2));
                }
                return grouped;
            })
        );
    }
}
