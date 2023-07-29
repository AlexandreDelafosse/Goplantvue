export interface Post {
    title?: string;
    content?: string;
    category?: string;
    // comments: Comments[];
    likes?: number;
    support?: string;
    views?: number;
    id: string;
    creator: User;
}

export interface User {
    id?: string;
    name?: string;
    description?: string;
    email?: string;
    friends?: User[];
    // comments: Comments[];
    // myEvents?: Event[];
    // pdp?: string;
    postLiked?: Post[];
    postPublished?: Post[];
}