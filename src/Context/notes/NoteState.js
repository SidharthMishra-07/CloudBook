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
          },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    //Add a note
    const addnote = async (title, link, description, date) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYzIxYzUyN2MzNzgzZjVhMjU5MmQ4In0sImlhdCI6MTY0MzExODA1OX0.ypv293phzAEziKcEb-omrb6HY_Cf2xnQLWebg997zhA'
            },
            body: JSON.stringify(title, link, description, date)
          });
          const json = await response.json();
          console.log(json);

        console.log("Adding a note");
        const note ={
            "_id": "62178c574272a4eddb138d663",
            "user": "61ec21c527c3783f5a2592d83",
            "title": title,
            "link": link,
            "description": description,
            "date": date,
            "__v": 0
        }
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
          console.log(json); 

        console.log("Deleteing the note with id" + id);
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
    }
    //Edit a note
    const editnote = async (id, title, link, description, date) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYzIxYzUyN2MzNzgzZjVhMjU5MmQ4In0sImlhdCI6MTY0MzExODA1OX0.ypv293phzAEziKcEb-omrb6HY_Cf2xnQLWebg997zhA'
            },
            body: JSON.stringify({title, link, description, date})
          });
          const json = await response.json();
          console.log(json);  

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                notes[index].title = title;
                notes[index].link = link;
                notes[index].description = description;
                notes[index].date = date;
            }  
        }
    }

    return(
        <NoteContext.Provider value={{notes, addnote, deletenote, editnote, getNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;