import React, { useState } from 'react';
import {TextField, Grid, Box, Typography, InputAdornment, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {SearchBarProps} from '../../types/types';
import BookCover from "../Book/BookCover.tsx";
import {isBookInReadingList} from "../../utils/helpers.ts";
import _ from "lodash";

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
                            { searchTerm ?
                                <IconButton
                                aria-label="clear search"
                                onClick={() => setSearchTerm('')}
                                edge="end"
                                size="large"
                                disabled={!searchTerm}
                                >
                                    <ClearIcon/>
                                </IconButton>
                                : null
                            }
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
                            {filteredBooks.map((book) => (
                                <Grid item key={_.uniqueId()} xs={12} sm={6} md={3} lg={2}>
                                    <BookCover
                                        book={book}
                                        isInReadingList={isBookInReadingList(book, readingList)}
                                        onAddToReadingList={onAddToReadingList}
                                        onRemoveFromReadingList={onRemoveFromReadingList}
                                        titleTypographyProps={{
                                            variant: 'subtitle2',
                                            color: 'textPrimary',
                                            style: {
                                                maxHeight: '4.5em',
                                                overflow: 'hidden',
                                                whiteSpace: 'normal',
                                                textOverflow: 'ellipsis',
                                                marginBottom: '0.5em',
                                                fontWeight: 'bold'
                                            }
                                        }}
                                        authorTypographyProps={{ variant: 'body2', color: 'textSecondary', gutterBottom: true }}
                                    />
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