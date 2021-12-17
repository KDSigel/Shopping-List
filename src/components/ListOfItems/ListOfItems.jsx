import React from 'react'
import Item from '../Item/Item'

export default function ListOfItems({items, deleteItem}) {

    return (
        <ul>
            {items.map((individualItem) => (
                <li key={individualItem.id}>
                    <Item 
                        individualItem={individualItem}
                        deleteItem={deleteItem}
                        />
                </li>
            ))
            }
        </ul>
    )
}
