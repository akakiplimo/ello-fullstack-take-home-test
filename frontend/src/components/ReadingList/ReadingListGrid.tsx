import React from "react";
import { Grid, Paper, Button } from '@mui/material';
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
        <Grid container spacing={2}>
            {_.isEmpty(readingList) ? <p>This reading list looks a little bit lonely. Please add some books 🥺</p> :
                readingList.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 16, position: 'relative' }}>
                        <StyledImg
                            srcSet={`${item.coverPhotoURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.coverPhotoURL}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
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
    );
};

export default ReadingListGrid;