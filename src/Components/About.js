import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/noteContext'

export const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
      a.update()
      //eslint-disable-next-line
  }, [])
  
  return (
    <div>
        <h1>This is About {a.state.name}</h1>
    </div>
  )
}
