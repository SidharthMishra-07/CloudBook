import React, {useContext, useState} from 'react'
import noteContext from '../Context/notes/noteContext'

export const AddNote = () => {
    const context = useContext(noteContext);
    const {addnote} = context;

    const [note, setnote] = useState({ title: "", link: "", description: "" , date: ""});
    const handleClick=(e)=>{
        e.preventDefault();
        addnote(note.title, note.link, note.description, note.date);
    }
    const Onchange=(e)=>{
        setnote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
        <div className="container my-3">
        <h2>Add your Post</h2>
        <form className='my-3'>
          <div className="form-group my-2">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" placeholder="Enter Title" onChange={Onchange}/>
          </div>
          <div className="form-group my-2">
            <label htmlFor="link">Link</label>
            <input type="text" className="form-control" id="link" name='link' aria-describedby="emailHelp" placeholder="Enter Link" onChange={Onchange}/>
          </div>
          <div className="form-group my-2">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" name="description" placeholder="Enter Description" onChange={Onchange} />
          </div>
          <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Post</button>
        </form>
      </div>
    </div>
  )
}
