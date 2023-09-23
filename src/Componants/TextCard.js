import React from 'react'
import Button from '@mui/material/Button';

const TextCard = () => {
  return (
    <div className='text-card-container'>
      <div className="text-card">
        <input type="text" placeholder='Enter your title.....'  className='Input-Area'/>
        <textarea name="" id="" cols="" rows="" placeholder='Enter your text....'></textarea>
<div className="button-send">
<Button variant="contained" className='arrow-send'>
        <i class="fa-solid fa-arrow-right "></i>
        </Button>
</div>
      </div>
     
    </div>
  )
}

export default TextCard
