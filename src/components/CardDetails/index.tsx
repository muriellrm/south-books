import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { IBookProps } from '../../utils/interfaces';

import { Container } from './styles';

interface BookProps {
    book: IBookProps;
    details: boolean;
}

const CardDetails: React.FC<BookProps> = ({ book, details }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(details);
    }, [details]);

    const Transition = forwardRef(function Transition(
        props: TransitionProps & { children?: React.ReactElement<any, any> },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleModal = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <Container            
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleModal}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"            
        >
            <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModal} color="primary">
                    Disagree
          </Button>
                <Button onClick={handleModal} color="primary">
                    Agree
          </Button>
            </DialogActions>
        </Container>
    );
};

export default CardDetails;