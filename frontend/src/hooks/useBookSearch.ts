import React, {useState} from "react";
import {Book} from "../types/types.ts";

const useBookSearch = (books: Book[]) => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter((book: Book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { searchTerm, handleSearchChange, filteredBooks };
}

export default useBookSearch;