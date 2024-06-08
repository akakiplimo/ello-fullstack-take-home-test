import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import ReadingListGrid from "./ReadingList/ReadingListGrid.tsx";
import {Book} from "../types/types.ts";
import {useReadingList} from "../context/ReadingListContext.tsx";
import AppHeader from "./AppHeader.tsx";

function AppContainer() {
    const [books, setBooks] = useState<Book[]>([]);
    const {readingList, setReadingList} = useReadingList()


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

            // url would be http://localhost:4000/ in dev
            const response = await fetch('https://ello-fullstack-adrian-server.vercel.app/', {
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

    return (
        <Container maxWidth='lg'>
            <AppHeader
                books={books}
            />
            <ReadingListGrid readingList={readingList} setReadingList={setReadingList}/>
        </Container>
    );
}

export default AppContainer;