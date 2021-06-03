import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from '../../pages/Home';

const mockedHistoryPush = jest.fn();

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
            setBooks: jest.fn()
        })
    }
})

describe('Home Page', () => {
    it('should be able to search', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Home />)

        const inputField = getByPlaceholderText('Pesquise pelos melhores livros');
        const buttonElement = getByTestId('pesquisar');

        fireEvent.change(inputField, { target: { value: 'teste' } });

        fireEvent.click(buttonElement);

        await waitFor(() => {
            expect(mockedHistoryPush).toHaveBeenCalledWith('/books');
        })
    });

    it('should be able to search default value', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Home />)

        const inputField = getByPlaceholderText('Pesquise pelos melhores livros');
        const buttonElement = getByTestId('pesquisar');

        fireEvent.change(inputField, { target: { value: '' } });

        fireEvent.click(buttonElement);

        await waitFor(() => {
            expect(mockedHistoryPush).toHaveBeenCalledWith('/books');
        })
    });
});