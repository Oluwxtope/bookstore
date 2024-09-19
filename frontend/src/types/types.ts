export type Book = {
    _id?: string;
    title: string;
    author: string;
    publishedYear: number | "";
};

export type Books = {
    data: Book[];
}
