import { Injectable } from '@angular/core';

@Injectable()
export class TestimonialService {
    getTestimonialsData() {
        return [
            {
                id: '1',
                imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                name: "Nome 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro soluta quos adipisci at fuga voluptatem! Voluptatum mollitia hic velit est assumenda dignissimos totam ullam, iure adipisci dicta, esse optio.",
                position: "CEO"
            },
            {
                id: '2',
                imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                name: "Nome 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro soluta quos adipisci at fuga voluptatem! Voluptatum mollitia hic velit est assumenda dignissimos totam ullam, iure adipisci dicta, esse optio.",
                position: "CEO"
            },
            {
                id: '3',
                imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                name: "Nome 3",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro soluta quos adipisci at fuga voluptatem! Voluptatum mollitia hic velit est assumenda dignissimos totam ullam, iure adipisci dicta, esse optio.",
                position: "CEO"
            },
            {
                id: '4',
                imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                name: "Nome 4",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro soluta quos adipisci at fuga voluptatem! Voluptatum mollitia hic velit est assumenda dignissimos totam ullam, iure adipisci dicta, esse optio.",
                position: "CEO"
            },
            {
                id: '5',
                imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                name: "Nome 5",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro soluta quos adipisci at fuga voluptatem! Voluptatum mollitia hic velit est assumenda dignissimos totam ullam, iure adipisci dicta, esse optio.",
                position: "CEO"
            },
            {
                id: '6',
                imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                name: "Nome 6",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro soluta quos adipisci at fuga voluptatem! Voluptatum mollitia hic velit est assumenda dignissimos totam ullam, iure adipisci dicta, esse optio.",
                position: "CEO"
            }
        ]
    }
    
    getTestimonials() {
        return Promise.resolve(this.getTestimonialsData());
    }
}