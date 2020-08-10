import React, { useReducer, useState } from 'react';
import { initialState, genericReducer } from '../reducer/reducer.js';
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function ToDo(e) {
    
    const [state, dispatch] = useReducer(genericReducer, initialState)
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleCompleted(e) {
        console.log(e.target.id)
        // dispatch the "COMPLETED" to reducer with a payload of the task item ID
        dispatch({ type: 'COMPLETED', payload: e.target.id})
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'ADD_TO_DO', payload: input})
        setInput('')
    }

    function handleClear(){
        dispatch({ type: 'CLEAR_ITEMS'})
    }

    return (
        <div>
            <ToDoForm 
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClear={handleClear} 
            />

            <ToDoCard items={state} handleCompleted={handleCompleted}
            />

        </div>
    )
}