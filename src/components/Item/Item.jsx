import React, { useState } from 'react'

export default function Item({individualItem, deleteItem, editItem}) {

    const [editing, setEditing] = useState(false)
    const [newContent, setNewContent] = useState(individualItem.itemName)

    return (
        <div>
            {individualItem.itemName}
            {editing 
            ?   <>
                    <input aria-label='edit-input' onChange={(e) => setNewContent(e.target.value)} value={newContent} />
                    <button aria-label='save-btn'
                        onClick={() => {
                        setEditing(false),
                        editItem(individualItem.id, newContent)
                        }}>save</button>
                </>
            : <button aria-label='edit-btn' onClick={() => setEditing(true)}>edit</button>
            }
            <button aria-label='delete-btn' onClick={() => deleteItem(individualItem.id)}>delete</button>
        </div>
    )
}
