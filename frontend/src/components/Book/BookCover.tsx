import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Book as BookType } from '../../types/types.ts';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import BookButton from './BookButton';
import {StyledImg} from "../AppContainer.tsx";

interface BookProps {
    book: BookType;
    isInReadingList: boolean;
    onAddToReadingList: (book: BookType) => void;
    onRemoveFromReadingList: (book: BookType) => void;
    titleTypographyProps?: React.ComponentProps<typeof Typography>;
    authorTypographyProps?: React.ComponentProps<typeof Typography>;
}

const BookCover: React.FC<BookProps> = ({
                                       book,
                                       isInReadingList,
                                       onAddToReadingList,
                                       onRemoveFromReadingList,
                                       titleTypographyProps,
                                       authorTypographyProps,
                                   }) => {
    return (
        <Paper style={{ padding: 16, position: 'relative' }}>
            <StyledImg
                srcSet={`${book.coverPhotoURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${book.coverPhotoURL}?w=164&h=164&fit=crop&auto=format`}
                alt={book.title}
                loading="lazy"
            />
            <Typography {...titleTypographyProps}>{book.title}</Typography>
            <Typography {...authorTypographyProps}>{book.author}</Typography>
            {isInReadingList ? (
                <BookButton
                    variant="contained"
                    color="secondary"
                    onClick={() => onRemoveFromReadingList(book)}
                    startIcon={<RemoveIcon />}
                >
                    Remove
                </BookButton>
            ) : (
                <BookButton
                    variant="contained"
                    color="primary"
                    onClick={() => onAddToReadingList(book)}
                    startIcon={<AddIcon />}
                >
                    Add
                </BookButton>
            )}
        </Paper>
    );
};

export default BookCover;
