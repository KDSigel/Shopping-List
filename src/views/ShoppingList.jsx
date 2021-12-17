import React, { useReducer, useState } from 'react'
import InputItem from '../components/InputItem/InputItem'
import ListOfItems from '../components/ListOfItems/ListOfItems'

const initialValue = [
    {id: 0,
    itemName: 'pear'
    }
]

function itemReducer(items, action) {
    switch(action.type) {

        case 'add': {
            return [...items, {
                id: items.length,
                itemName: action.itemName
            }]
            }
        case 'edit': {
            //edit logic to change state
        }
        case 'delete': {
            // delete logic for changing state
            return items.filter((item) => item.id !== action.id)
        }

    default: {
        throw Error(`SHit went wRONg`)
    }
    }
}


export default function ShoppingList() {

const [items, dispatch] = useReducer(itemReducer, initialValue)
const [oneItem, setOneItem] = useState('')

const addItem = (e) => {
    e.preventDefault()
    dispatch({
    type: 'add',
    itemName: oneItem
})
}

const deleteItem = (id) => {
    dispatch({
    type: 'delete',
    id
})
}

    return (
        <div>
            <h1>Shopping List!</h1>
            <InputItem 
                addItem={addItem}
                oneItem={oneItem}
                setOneItem={setOneItem}
            />
            <ListOfItems 
                deleteItem={deleteItem}
                items={items}
            />
        </div>
    )
}
