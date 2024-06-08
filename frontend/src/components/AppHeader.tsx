import {Box} from "@mui/material";
import SearchBar from "./SearchBar/SearchBar.tsx";
import useBookSearch from "../hooks/useBookSearch.ts";
import {useReadingList} from "../context/ReadingListContext.tsx";
import {Book} from "../types/types.ts";

interface AppHeaderProps {
    books: Book[];
}

const AppHeader: React.FC<AppHeaderProps> = ({books}) => {

    const { searchTerm, handleSearchChange, filteredBooks } = useBookSearch(books);
    const {readingList, addToReadingList, removeFromReadingList} = useReadingList()

    return (
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
                onAddToReadingList={addToReadingList}
                onRemoveFromReadingList={removeFromReadingList}
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
            />
        </Box>
    )
}

export default AppHeader;