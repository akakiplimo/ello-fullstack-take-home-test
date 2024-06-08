import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {}

const BookButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
    return (
        <Button {...rest}>
            {children}
        </Button>
    );
};

export default BookButton;