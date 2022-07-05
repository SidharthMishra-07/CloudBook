import React from 'react'

const NoteItem = (props) => {
    const { note } = props
    return (
        <div className='col-md-4'>
            <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repellendus natus debitis repudiandae tempora explicabo temporibus nulla perferendis! Doloremque possimus a libero veniam et ratione illo ipsam quibusdam numquam magnam!</p>
                    </div>                   
            </div>
            <a href="#" class="btn btn-primary">Go There</a>
        </div>
    )
}

export default NoteItem