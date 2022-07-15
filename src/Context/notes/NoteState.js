import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    
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
    const addnote = (title, link, description, date) => {
        console.log("Adding a note");
        const note ={
            "_id": "62178c574272a4eddb138d66",
            "user": "61ec21c527c3783f5a2592d83",
            "title": title,
            "description": description,
            "date": date,
            "__v": 0
        }
        setNotes(notes.concat(note));
    }
    //Delete a note
    const deletenote = (note) => {
        
    }
    //Edit a note
    const editnote = (note) => {
        
    }

    return(
        <NoteContext.Provider value={{notes, addnote, deletenote, editnote}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;