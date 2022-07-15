import React from 'react'
import noteContext from '../Context/notes/noteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {addnote} = context;
    const { note } = props
    return (
        <div className='col-md-4'>
            <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="far fa-trash-alt mx-2"></i>
                        <i className="far fa-edit mx-2"></i>
                    </div>                   
            </div>
            <a href="/" className="btn btn-primary">Go There</a>
        </div>
    )
}

export default NoteItem