import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        //Evitamos el refresco del navegador
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // Actualizamos categorías
            setCategories(cats => [inputValue, ...cats]);
            // Limpiamos la entrada
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
