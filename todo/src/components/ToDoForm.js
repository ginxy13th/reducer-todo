import React from 'react';

export default function ToDoForm(props) {
    return (
        <div>
            <form onSubmit={e => props.handleSubmit(e)}>
                <input 
                type='text'
                placeholder='Add an ToDo Item'
                onChange={e => props.handleChange(e)}
                value={props.input}/>
                <button className='additem' onSubmit={e => props.handleSubmit(e)}>Add Item</button>
            </form>
            <button className='clearbutton' onClick={e => props.handleClear(e)}>Clear Items</button>
        </div>
    )
    
}
