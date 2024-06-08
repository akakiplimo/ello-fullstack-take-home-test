import React, { useState } from 'react';
import {TextField, Grid, Paper, Button, Box, Typography, InputAdornment, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Book, SearchBarProps} from '../../types/types';
import {StyledImg} from "../AppContainer.tsx";

const SearchBar: React.FC<SearchBarProps> = ({
                                                 books,
                                                 readingList,
                                                 onAddToReadingList,
                                                 onRemoveFromReadingList,
                                             }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter((book) =>
        book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isBookInReadingList = (book: Book) =>
        readingList.some((readingListBook) => readingListBook.title === book.title && readingListBook.author === book.author);

    const disabledStyle = {
        cursor: 'not-allowed',
        pointerEvents: 'auto',
    };

    return (
        <>
            <TextField
                label="Search Books"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="clear search"
                                onClick={() => setSearchTerm('')}
                                edge="end"
                                size="large"
                                disabled={!searchTerm}
                                style={!searchTerm ? disabledStyle : {}}
                            >
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                style={{ marginBottom: 16 }}
            />
            {
                searchTerm === '' ? null : (
                    <>
                        <Typography
                            variant="h6"
                            sx={{ alignSelf: 'flex-start', fontWeight: 'bold' }}
                        >
                            Search Results
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            <em>Showing {filteredBooks.length} results</em>
                        </Typography>
                        <Box
                            sx={{
                                maxHeight: 400,
                                width: '100%',
                                overflowY: 'scroll',
                                boxShadow: 3,
                                p: 2,
                                borderRadius: 2,
                                position: 'relative',
                            }}
                        >
                            {filteredBooks.length > 0 ? (
                            <Grid container spacing={2}>
                            {filteredBooks.map((book, index) => (
                                <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
                                    <Paper style={{ padding: 16, position: 'relative' }}>
                                        <StyledImg
                                            srcSet={`${book.coverPhotoURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${book.coverPhotoURL}?w=164&h=164&fit=crop&auto=format`}
                                            alt={book.title}
                                            loading="lazy"
                                        />
                                        <Typography
                                            variant="subtitle1"
                                            component="h3"
                                            style={{
                                                maxHeight: '3.5em',
                                                overflow: 'hidden',
                                                whiteSpace: 'normal',
                                                textOverflow: 'ellipsis',
                                                marginBottom: '0.5em',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {book.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                            color="textSecondary"
                                            gutterBottom
                                        >
                                            {book.author}
                                        </Typography>
                                        {isBookInReadingList(book) ? (
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => onRemoveFromReadingList(book)}
                                                style={{ position: 'relative'}}
                                                startIcon={<RemoveIcon />}
                                            >
                                                Remove
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => onAddToReadingList(book)}
                                                style={{ position: 'relative'}}
                                                startIcon={<AddIcon />}
                                            >
                                                Add
                                            </Button>
                                        )}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                            ) : (
                                <Typography variant="body1" color="textSecondary">
                                    🔍 No results found. Please adjust your search criteria and try again.
                                </Typography>
                            )
                            }
                        </Box>
                    </>
                )}
        </>
    );
};

export default SearchBar;