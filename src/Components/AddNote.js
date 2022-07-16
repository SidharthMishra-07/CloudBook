import React, {useContext, useState} from 'react'
import noteContext from '../Context/notes/noteContext'

export const AddNote = () => {
    const context = useContext(noteContext);
    const {addnote} = context;

    const [note, setnote] = useState({ title: "", link: "", description: "" , date: ""});
    const handleClick=(e)=>{
        e.preventDefault();
        addnote(note.title, note.link, note.description, note.date);
        setnote({title: "", link: "", description: "" , date: ""});
    }
    const Onchange=(e)=>{
        setnote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
        <div className="container my-3">
        <h2 className="my-2"> Add your Post</h2>
        <form className='my-2'>
          <div className="form-group my-2">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" placeholder="Enter Title" onChange={Onchange} minLength={5} required/>
          </div>
          <div className="form-group my-2">
            <label htmlFor="link">Link</label>
            <input type="text" className="form-control" id="link" name='link' value={note.link} aria-describedby="emailHelp" placeholder="Enter Link" onChange={Onchange} minLength={5} required/>
          </div>
          <div className="form-group my-2">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} placeholder="Enter Description" onChange={Onchange} minLength={5} required />
          </div>
          <button disabled={note.title.length<5 || note.link.length<5 || note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Post</button>
        </form>
      </div>
    </div>
  )
}
