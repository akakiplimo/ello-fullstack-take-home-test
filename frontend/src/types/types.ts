import React from "react";

export interface Book {
    author?: string;
    coverPhotoURL?: string;
    readingLevel?: string;
    title?: string;
}

export interface ReadingListProps {
    readingList: Book[];
    setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
}

export interface SearchBarProps {
    books: Book[];
    readingList: Book[];
    onAddToReadingList: (book: Book) => void;
    onRemoveFromReadingList: (book: Book) => void;
}