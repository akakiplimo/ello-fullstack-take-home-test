import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {}

const BookButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
    return (
        <Button sx={{width: '100%'}} {...rest}>
            {children}
        </Button>
    );
};

export default BookButton;