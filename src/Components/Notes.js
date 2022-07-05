import React from 'react'

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container my-3">
            <h2>Your Post</h2>
            {notes.map((note) => {
                return note.title;
            })}
        </div>
    )
}
