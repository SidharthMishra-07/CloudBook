import React, {useContext, useEffect} from 'react'
import noteContext from '../Context/notes/noteContext'
import { AddNote } from './AddNote';
import Modal from './Modal';
import NoteItem from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes} = context;
    useEffect(()=>{
        getNotes();
        //eslint-disable-next-line
    }, [])
    const updateNote = (note) => {

    }
    return (
        <>
        <AddNote/>
        <Modal/>
        <div className="row my-3">
            <h2>Your Post</h2>
            {notes.map((note) => {
                return <NoteItem key={note._id} updateNote={updateNote} note={note}/>
            })}
        </div>
        </>
    )
}
