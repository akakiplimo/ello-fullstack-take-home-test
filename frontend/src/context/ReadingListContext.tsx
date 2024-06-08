import React, { createContext, useState, useEffect, useContext } from 'react';
import { Book } from '../types/types';

interface ReadingListContextType {
    readingList: Book[];
    setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
    addToReadingList: (book: Book) => void;
    removeFromReadingList: (book: Book) => void;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(undefined);


// eslint-disable-next-line react-refresh/only-export-components
export const useReadingList = () => {
    const context = useContext(ReadingListContext);
    if(!context) {
        throw new Error('useReadingList must be used within a ReadingListProvider!')
    }
    return context;
};

export const ReadingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [readingList, setReadingList] = useState<Book[]>(() => {
        const savedList = localStorage.getItem('readingList');
        return savedList ? JSON.parse(savedList) : [];
    });

    useEffect(() => {
        localStorage.setItem('readingList', JSON.stringify(readingList))
    }, [readingList]);

    const addToReadingList = (book: Book) => {
        setReadingList((prevList) => [...prevList, book]);
    };

    const removeFromReadingList = (book: Book) => {
        setReadingList((prevList) =>
            prevList.filter(
                (readingListBook) =>
                    readingListBook.title !== book.title || readingListBook.author !== book.author
            )
        );
    };

    return (
        <ReadingListContext.Provider value={{ readingList, setReadingList, addToReadingList, removeFromReadingList }}>
            {children}
        </ReadingListContext.Provider>
    )
}