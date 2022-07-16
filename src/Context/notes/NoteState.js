import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000";
    
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Get all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchnotes`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYzIxYzUyN2MzNzgzZjVhMjU5MmQ4In0sImlhdCI6MTY0MzExODA1OX0.ypv293phzAEziKcEb-omrb6HY_Cf2xnQLWebg997zhA'
          }
        });
        const json = await response.json();
        setNotes(json);
    }

    //Add a note
    const addnote = async (title, link, description, date) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYzIxYzUyN2MzNzgzZjVhMjU5MmQ4In0sImlhdCI6MTY0MzExODA1OX0.ypv293phzAEziKcEb-omrb6HY_Cf2xnQLWebg997zhA'
            },
        body: JSON.stringify({title, link, description, date})
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    }
    //Delete a note
    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYzIxYzUyN2MzNzgzZjVhMjU5MmQ4In0sImlhdCI6MTY0MzExODA1OX0.ypv293phzAEziKcEb-omrb6HY_Cf2xnQLWebg997zhA'
            }
          });
          const json = await response.json(); 

        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
    }
    //Edit a note
    const editnote = async (id, title, link, description, date) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYzIxYzUyN2MzNzgzZjVhMjU5MmQ4In0sImlhdCI6MTY0MzExODA1OX0.ypv293phzAEziKcEb-omrb6HY_Cf2xnQLWebg997zhA'
            },
            body: JSON.stringify({title, link, description, date})
          });
          const json = await response.json(); 

          let newNotes = JSON.parse(JSON.stringify(notes))
          // Logic to edit in client
          for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
              newNotes[index].title = title;
              newNotes[index].link = link; 
              newNotes[index].description = description;
              break; 
            }
          }  
          setNotes(newNotes);
    }

    return(
        <NoteContext.Provider value={{notes, addnote, deletenote, editnote, getNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;