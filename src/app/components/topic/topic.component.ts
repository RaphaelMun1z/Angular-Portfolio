import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

interface Topic {
    title : string;
    icon? : string;
    p1s? : string[];
    p2s? : string[];
    t2? : boolean;
}

@Component({
    selector: 'app-topic',
    standalone: true,
    imports: [CommonModule, SkeletonModule],
    templateUrl: './topic.component.html',
    styleUrls: ["./topic.component.scss", "./topic-responsive.component.scss"]
})

export class TopicComponent{
    @Input() topicData: Topic | undefined = undefined;
}
