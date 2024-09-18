export interface Book {
    _id: string;
    title: string;
    author: string;
    publishedYear: number;
};

export interface Books {
    data: Book[];
}
