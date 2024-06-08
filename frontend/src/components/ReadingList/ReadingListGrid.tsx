import React from "react";
import {Grid, Typography} from '@mui/material';
import _ from "lodash";
import {ReadingListProps} from "../../types/types.ts";
import BookCover from "../Book/BookCover.tsx";
import {isBookInReadingList} from "../../utils/helpers.ts";

const ReadingListGrid: React.FC<ReadingListProps> = ({ readingList, setReadingList }) => {
    const handleRemove = (index: number) => {
        const newList = [...readingList];
        newList.splice(index, 1);
        setReadingList(newList);
    };

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Reading List {readingList.length > 0 ? `(${readingList.length} ${readingList.length === 1 ? 'book' : 'books'})` : null}
            </Typography>
            {
                _.isEmpty(readingList) ?
                <Typography variant="body1" color="textSecondary">
                    Your students' reading list is empty. Search to start adding some books to the list! 📚
                </Typography>
                :
            <Grid container spacing={2}>
                    {readingList.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <BookCover
                            book={item}
                            isInReadingList={isBookInReadingList(item, readingList)}
                            onAddToReadingList={()=>{}}
                            onRemoveFromReadingList={() =>handleRemove(index)}
                            titleTypographyProps={{ variant: 'h6', color: 'textPrimary', style: {fontWeight: 'bold'}}} // Customize title Typography
                            authorTypographyProps={{ variant: 'body1', color: 'textSecondary', gutterBottom: true }} // Customize author Typography
                        />
                    </Grid>
                ))}
            </Grid>
            }
        </>
    );
};

export default ReadingListGrid;