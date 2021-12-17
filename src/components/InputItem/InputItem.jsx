import React from 'react'

export default function InputItem({addItem, oneItem, setOneItem}) {

    return (
        <div>
            <form onSubmit={addItem}>
                <input value={oneItem} onChange={(e) => setOneItem(e.target.value)}/>
                    <button>Add Item</button>
            </form>
        </div>
    )
}
