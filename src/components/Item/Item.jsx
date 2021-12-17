import React from 'react'

export default function Item({individualItem, deleteItem}) {

    return (

        <div>
            {individualItem.itemName}
            <button>edit</button>
            <button onClick={() => deleteItem(individualItem.id)}>delete</button>
        </div>
    )
}
