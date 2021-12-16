import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCatergorias}) => {

    const [inputValue, setinputValue] = useState('');

    const handeInputChange = ( e ) => {        
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCatergorias(
                c => [inputValue, ...c]
            )
            setinputValue('');
        }
        
    }

    return (        
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handeInputChange}
            />
        </form>        
    )
}

AddCategory.propTypes = {
    setCatergorias: PropTypes.func.isRequired
}
