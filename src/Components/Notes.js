import React, { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../Context/notes/noteContext'
import { AddNote } from './AddNote';
import Modal from './Modal';
import NoteItem from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
        //eslint-disable-next-line
    }, [])
    const ref = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setnote({etitle: currentNote.title, elink: currentNote.link, edescription: currentNote.description});
    }
    const [note, setnote] = useState({ etitle: "", elink: "", edescription: "" , edate: ""});
    const handleClick=(e)=>{
        e.preventDefault();
    }
    const Onchange=(e)=>{
        setnote({...note,[e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote />

            {/* Edit Note Modal */}
            <button type="button" class="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body my-1">
                            <form className='my-3'>
                                <div className="form-group my-2">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" placeholder="Enter Title" onChange={Onchange} />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="elink">Link</label>
                                    <input type="text" className="form-control" id="elink" name='elink' value={note.elink} aria-describedby="emailHelp" placeholder="Enter Link" onChange={Onchange} />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="edescription">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} placeholder="Enter Description" onChange={Onchange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Post</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Post</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
