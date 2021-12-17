import React from 'react'

export default function InputItem({addItem, oneItem, setOneItem}) {

    return (
        <div>
            <form onSubmit={addItem}>
                <input aria-label='inputNewItem' value={oneItem} onChange={(e) => setOneItem(e.target.value)}/>
                    <button aria-label='addItemButton'>Add Item</button>
            </form>
        </div>
    )
}
