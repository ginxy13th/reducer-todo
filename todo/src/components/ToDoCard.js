import React from 'react';

const ToDoCard = (props) => {
    const {items} = props.items

    return (
        <div>
            {items.map(item => {
                return (
                    <div>{console.log(item)}
                        <h3>{item.item}</h3>
                        {/* <p>Completed: {JSON.stringify(item.completed)}</p> */}
                        {/* toggle completed by passing in the item ID to use as comparison in the reducer */}
                        <button id={item.id} onClick={e => props.handleCompleted(e)}>COMPLETED</button>
                        <p>{item.date_posted}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default ToDoCard