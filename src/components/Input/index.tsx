import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';
import { FiSearch } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, [])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField])

    return (
        <Container isFilled={isFilled} isFocused={isFocused} isErrored={!!error}>
            {Icon && <Icon size={20} />}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest} />
            <button type='submit'><FiSearch /></button>
        </Container>
    )
};

export default Input;