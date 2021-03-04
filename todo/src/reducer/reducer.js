export const initialState = { items: [
    {
    item: 'Laundry',
    completed: false,
    id: 3892987589
    }
]}

export function genericReducer(state, action ) {
    // switch through the action type that the dispatch is invoking
    // dispatch({ type: ADD_TO_DO, payload: someItem })
    switch (action.type) {
        case 'ADD_TO_DO':
            return { items: [
                 ...state.items, { item: action.payload, id: Date.now(),
                 completed: false}
                 
            ]};

        case 'COMPLETED':
            // console log action.payload so you know how it is being passed down
            
            return {
                // remember that the comparison is the item ID. So map through your todo state, 
                // to find the item that matches that ID, and toggle its completed.
                items: state.items.map(item => {
                    if (item.id === Number(action.payload)) {
                        return {...item, completed: !item.completed}
                    
                    } else {
                        return item
                    }
                })
            }

        case 'CLEAR_ITEMS':
            return {
                items: state.items.filter(item => {
                    return item.completed === false
                })
            }
        default: return state;
    }
}
