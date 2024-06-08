import React from "react";
import {Grid, Paper, Button, Typography, styled} from '@mui/material';
import {StyledImg} from "../MainTeacherView.tsx";
import _ from "lodash";
import {ReadingListProps} from "../../types/types.ts";

const ReadingListGrid: React.FC<ReadingListProps> = ({ readingList, setReadingList }) => {
    const handleRemove = (index: number) => {
        const newList = [...readingList];
        newList.splice(index, 1);
        setReadingList(newList);
    };

    return (
        <>
            <Typography variant="h2" gutterBottom>
                Reading List {readingList.length > 0 ? `(${readingList.length})` : null}
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
                        <Paper style={{ padding: 16, position: 'relative' }}>
                            <StyledImg
                                srcSet={`${item.coverPhotoURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.coverPhotoURL}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontWeight: 'bold'
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                component="p"
                                color="textSecondary"
                                gutterBottom
                            >
                                {item.author}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRemove(index)}
                                style={{ position: 'relative'}}
                            >
                                Remove
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            }
        </>
    );
};

export default ReadingListGrid;