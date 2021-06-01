import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Container } from './styles';

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {

    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        setOpen(isLoading);
    }, [isLoading])

    return (
        <Container open={open} style={{ zIndex: 1 }}>
            <CircularProgress color="inherit" />
        </Container>
    );
}

export default Loading;

