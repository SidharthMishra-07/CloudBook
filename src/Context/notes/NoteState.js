import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const state = {
        "name": "Sidharth",
        "class": "12th",
    }
    return(
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;