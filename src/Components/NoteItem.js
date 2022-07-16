import React, {useContext} from 'react'
import noteContext from '../Context/notes/noteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deletenote} = context;
    const { note, updateNote } = props
    return (
        <div className='col-md-4'>
            <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deletenote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>                   
            </div>
            <a href={note.link} target="_blank" rel ="noreferrer" className="btn btn-primary">Go to PostLink </a>
        </div>
    )
}

export default NoteItem