import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddTask = ({onNewTask}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <1) return;
        onNewTask( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input 
                type="text"
                placeholder="Add new task"
                value={inputValue}
                onChange={ (event) => onInputChange(event) } 
            >
            </input>
        </form>    
    )
}

AddTask.propTypes = {
    onNewTask: PropTypes.func.isRequired
}