import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "Sidharth",
        "class": "12th",
    }
    const [state, setState] = useState(s1);
    const update =()=>{
        setTimeout(()=>{
            setState({
                "name": "Sritam",
                "class": "10th",
            })
        }, 5000)       
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;