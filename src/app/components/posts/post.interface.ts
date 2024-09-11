export interface PostI {    
    title: {
        rendered: string;
    };
    content:{
        rendered: string;
    };
    image: string;
    date: string;
    status?: string;
}