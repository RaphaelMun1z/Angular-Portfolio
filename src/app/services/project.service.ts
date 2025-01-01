import { Injectable } from '@angular/core';
import data from '../db/data.json'

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    
    constructor() { }
    
    getAll(){
        return data.projects;
    }
}
