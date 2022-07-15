import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000";
    
    const notesInitial = [
        {
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d8",
            "title": "Second Note12",
            "description": "This is the second note12",
            "date": "2022-02-24T13:47:03.726Z",
            "__v": 0
        },
        {
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d8",
            "title": "Second Note12",
            "description": "This is the second note12",
            "date": "2022-02-24T13:47:03.726Z",
            "__v": 0
        },
        {
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d8",
            "title": "Second Note12",
            "description": "This is the second note12",
            "date": "2022-02-24T13:47:03.726Z",
            "__v": 0
        },
        {
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d8",
            "title": "Second Note12",
            "description": "This is the second note12",
            "date": "2022-02-24T13:47:03.726Z",
            "__v": 0
        },
        {
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d8",
            "title": "Second Note12",
            "description": "This is the second note12",
            "date": "2022-02-24T13:47:03.726Z",
            "__v": 0
        },
        {
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d8",
            "title": "Second Note12",
            "description": "This is the second note12",
            "date": "2022-02-24T13:47:03.726Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial);

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

        console.log("Adding a note");
        const note ={
            "_id": "62178c574272a4eddb138d663",
            "user": "61ec21c527c3783f5a2592d83",
            "title": title,
            "description": description,
            "date": date,
            "__v": 0
        }
        setNotes(notes.concat(note));
    }
    //Delete a note
    const deletenote = (id) => {
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
        <NoteContext.Provider value={{notes, addnote, deletenote, editnote}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;