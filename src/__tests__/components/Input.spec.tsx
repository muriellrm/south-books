

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from '../../components/Input';


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

describe('Input Component', () => {

    it('should be able to render an input', () => {
        const { getByPlaceholderText } = render(<Input placeholder="book" name="book" />);
        const inputElement = getByPlaceholderText('book');

        expect(inputElement).toBeTruthy();
    });

    it('should render highlight on input focus', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Input placeholder="book" name="book" />);
        
        const inputElement = getByPlaceholderText('book');
        const containerElement = getByTestId('input-container');

        fireEvent.focus(inputElement);

        await waitFor(() => {            
            expect(containerElement).toHaveStyle('color: #FF9900');
            expect(containerElement).toHaveStyle('border-color: #FF9900');
        })

        fireEvent.change(inputElement, { target: { value: 'teste' } });
        fireEvent.blur(inputElement);

        await waitFor(() => {            
            expect(containerElement).toHaveStyle('color: #FF9900');
            expect(containerElement).not.toHaveStyle('border-color: #FF9900');
        })
        
    });

    it('should change input icon color when filling', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Input placeholder="book" name="book" />);
        
        const inputElement = getByPlaceholderText('book');
        const containerElement = getByTestId('input-container');

        fireEvent.focus(inputElement);
        
        fireEvent.change(inputElement, { target: { value: 'teste' } });
        fireEvent.blur(inputElement);

        await waitFor(() => {            
            expect(containerElement).toHaveStyle('color: #FF9900');
            expect(containerElement).not.toHaveStyle('border-color: #FF9900');
        })
        
    });
});