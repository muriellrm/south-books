import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Books from '../../pages/Books';


const mockedHistoryPush = jest.fn();
const mockedOnSubmit = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useHistory: () => ({
            push: mockedHistoryPush
        }),
        Link: ({ children }: { children: React.ReactNode }) => children
    }
});

jest.mock('../../hooks/provider', () => {
    return {
        useProvider: () => ({
            setBooks: mockedOnSubmit,
            books: []
        })
    }
})

jest.mock('@unform/core', () => {
    return {
        useField: () => ({
            fieldName: 'book',
            defaultValue: '',
            error: '',
            registerField: jest.fn()
        })
    }
});

jest.mock('@unform/web', () => {
    return {
        Form: ({ children }: { children: React.ReactNode }) => children
    }
})

describe('Book Page', () => {
    it('should be able to render page books', () => {
        const books = render(<Books />)
        expect(books).toBeTruthy();
    });

    it('should be able navigate to favorites page', async () => {
        const { getByTestId } = render(<Books />);
        
        const favoriteHistory = getByTestId('favorites');
        fireEvent.click(favoriteHistory);

        await waitFor(() => {
            expect(mockedHistoryPush).toHaveBeenCalledWith('/favorites');
        })
    });
    
    it('should be able navigate to recents page', async () => {
        const { getByTestId } = render(<Books />);
        
        const recentHistory = getByTestId('recents');
        fireEvent.click(recentHistory);

        await waitFor(() => {
            expect(mockedHistoryPush).toHaveBeenCalledWith('/recents');
        })
    });


});