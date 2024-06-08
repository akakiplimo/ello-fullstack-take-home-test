import {Book} from "../types/types.ts";

export const isBookInReadingList = (book: Book, readingList: Book[]) =>
    readingList.some(
        (readingListBook) => readingListBook.title === book.title && readingListBook.author === book.author
    );