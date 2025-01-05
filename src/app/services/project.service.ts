import { Injectable } from '@angular/core';
import data from '../../assets/db/data.json'

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    getAll(){
        return data.projects;
    }
    
    getProjectById(id: string | null){
        return data.projects.filter(project => project.id === id)[0];
    }
}
