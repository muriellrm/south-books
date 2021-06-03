import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';
import { FiSearch } from 'react-icons/fi'

describe('Button Component', () => {
    it('should be able to click', () => {
        const { getByPlaceholderText } = render(<Button placeholder="button" />);
        const buttonElement = getByPlaceholderText('button');
        fireEvent.click(buttonElement);
    });

    it('should be create a button with icon', () => {
        const { getByPlaceholderText } = render(<Button placeholder="button" icon={FiSearch} />);
        const buttonElement = getByPlaceholderText('button');        
    
        expect(buttonElement).toContainHTML;
    });
});