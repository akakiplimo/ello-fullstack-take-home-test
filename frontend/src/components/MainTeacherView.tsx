import {Box, Container} from "@mui/material";
import {useEffect, useState} from "react";
import styled from 'styled-components';
import ReadingListGrid from "./ReadingList/ReadingListGrid.tsx";
import {Book} from "../types/types.ts";
import SearchBar from "./SearchBar/SearchBar.tsx";
import useBookSearch from "../hooks/useBookSearch.ts";

function BookAssignmentView() {
    const [books, setBooks] = useState<Book[]>([]);
    const [readingList, setReadingList] = useState<Book[]>([]);
    const { searchTerm, handleSearchChange, filteredBooks } = useBookSearch(books);

    const handleAddToReadingList = (book: Book) => {
        setReadingList((prevList) => [...prevList, book]);
    }

    const handleRemoveFromReadingList = (book: Book) => {
        setReadingList((prevList) => {
            return prevList.filter(
                (readingListBook) =>
                    readingListBook.title !== book.title ||
                    readingListBook.author !== book.author);
        })
    }

    useEffect(() => {
        const fetchBooks = async () => {
            const query = `query Books {
                                                          books {
                                                            title
                                                            author
                                                            coverPhotoURL
                                                            readingLevel
                                                          }
                                                        }`;

            const response = await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({query})
            });

            const result = await response.json()
            setBooks(result.data.books)
        };

        fetchBooks().then(() => console.log('Fetch Success')).catch(e => console.error('err', e));
    }, []);

    //@TODO: add search bar that allows users to search books by title
    //@TODO: list search results that display the book title, author & a button to add books to the student reading list
    //@TODO: * EXTRA have a remove button within search bar if book is already chosen
    //@TODO: Have a reading list that displays all books the teacher has added i.e. we need a state to keep selected readingList books
    //@TODO: * Aesthetically show the book details within reading list
    //@TODO: Button to remove a book from the reading list

    return (
        <Container maxWidth='lg'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                <Box
                    component="img"
                    sx={{
                        height: 64,
                        width: 'auto',
                        mb: 2,
                    }}
                    alt="Ello Logo"
                    src="https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93"
                />
                <SearchBar
                    books={filteredBooks}
                    readingList={readingList}
                    onAddToReadingList={handleAddToReadingList}
                    onRemoveFromReadingList={handleRemoveFromReadingList}
                    searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                />
            </Box>
            <h1>Reading List {readingList.length > 0 ? `(${readingList.length})` : null}</h1>
            <ReadingListGrid readingList={readingList} setReadingList={setReadingList}/>
        </Container>
    );
}

export const StyledImg = styled.img`
    height: 100%;
    width: 100%;
`

export default BookAssignmentView;