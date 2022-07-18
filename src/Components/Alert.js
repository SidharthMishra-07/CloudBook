import React from 'react'

function Alert(props) {
    const danger=(word)=>{
        if(word === "danger"){
            word = "Error"
        }
        return word
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{danger(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert
