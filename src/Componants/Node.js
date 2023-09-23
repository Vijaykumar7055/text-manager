import React from 'react'
import Button from '@mui/material/Button';
const Node = (probs) => {
  return (
    <div className="form-container">
    <div className='text-card1'>
   <h1>{probs.title}</h1>
<br />
<p>{probs.contant}</p>
<Button variant="contained">
<i class="fa-solid fa-trash"></i>
</Button>
    </div>
    </div>
  )
}

export default Node
