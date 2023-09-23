import React, { useState } from 'react'
import Button from '@mui/material/Button';

const TextCard = (probs) => {
const [node, setNode]=useState({
  title:"",
  contant:"",
});

const inputEvent=(event)=>{
  // const value=event.target.value;
  // const name=event.target.name;

  const {name, value}= event.target;
setNode((prevData)=>{
  return {
    ...prevData,
    [name]: value,
  }
})
console.log(node)
}


const addEvent=()=>{
probs.passNode(node)
setNode({
  title:"",
  contant:"",
})
}

  return (
    <div className='text-card-container'>
      <div className="text-card">
        <input type="text" name='title' value={node.title}   onChange={inputEvent} placeholder='Enter your title.....'  className='Input-Area'/>
        
        <textarea  id="" name='contant' value={node.contant} onChange={inputEvent} cols="" rows="" placeholder='Enter your text....'></textarea>
<div className="button-send">
<Button variant="contained" className='arrow-send' onClick={addEvent}>
        <i class="fa-solid fa-arrow-right "></i>
        </Button>
</div>
      </div>
     
    </div>
  )
}

export default TextCard
