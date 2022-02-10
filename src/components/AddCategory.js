import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');  // Si no se pone nada, va como undefined

    const handleInputChange = ( e ) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 1 ) {  // Controla que no se envie vacio
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');  // Limpia el input
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}