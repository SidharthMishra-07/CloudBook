import React, { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../Context/notes/noteContext'
import { AddNote } from './AddNote';
import NoteItem from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editnote } = context;
    useEffect(() => {
        getNotes();
        //eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refclose = useRef(null);

    const [note, setnote] = useState({ etitle: "", elink: "", edescription: "", edate: "" });

    const updateNote = (currentNote) => {
        ref.current.click();
        setnote({ id: currentNote._id, etitle: currentNote.title, elink: currentNote.link, edescription: currentNote.description });
    }
    const handleClick = (e) => {
        e.preventDefault();
        editnote(note.id, note.etitle, note.elink, note.edescription, note.edate);
        refclose.current.click();
    }
    const Onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />

            {/* Edit Note Modal */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body my-1">
                            <form className='my-3'>
                                <div className="form-group my-2">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" placeholder="Enter Title" onChange={Onchange} minLength={5} required />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="elink">Link</label>
                                    <input type="text" className="form-control" id="elink" name='elink' value={note.elink} aria-describedby="emailHelp" placeholder="Enter Link" onChange={Onchange} minLength={5} required />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="edescription">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} placeholder="Enter Description" onChange={Onchange} minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.elink.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Post</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Post</h2>
                <div className="container mx-2 my-2">
                    {notes.length === 0 && 'Start Adding Posts'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
