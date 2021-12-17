import React from 'react'
import Item from '../Item/Item'

export default function ListOfItems({items, deleteItem, editItem}) {

    return (
        <ul>
            {items.map((individualItem) => (
                <li key={individualItem.id}>
                    <Item 
                        editItem={editItem}
                        individualItem={individualItem}
                        deleteItem={deleteItem}
                        />
                </li>
            ))
            }
        </ul>
    )
}
