import React, { useState } from 'react'

export default function Item({individualItem, deleteItem, editItem}) {

    const [editing, setEditing] = useState(false)
    const [newContent, setNewContent] = useState(individualItem.itemName)

    return (
        <div>
            {individualItem.itemName}
            {editing 
            ?   <>
                    <input onChange={(e) => setNewContent(e.target.value)} value={newContent} />
                    <button onClick={() => {
                        setEditing(false),
                        editItem(individualItem.id, newContent)
                        }}>save</button>
                </>
            : <button onClick={() => setEditing(true)}>edit</button>
            }
            <button onClick={() => deleteItem(individualItem.id)}>delete</button>
        </div>
    )
}
