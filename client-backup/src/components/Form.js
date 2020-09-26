import React, { useState } from 'react'

function Form() {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input type="text" value={title} required 
        onChange={e => {setTitle(e.target.value)}}/>
      <input type="submit" value="add song"/>
    </form>
  )
}

export default Form
