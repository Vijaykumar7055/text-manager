import React, { useState } from 'react'
import Header from './Componants/Header'
import TextCard from './Componants/TextCard'
import Node from './Componants/Node'
const App = () => {

  const [addItem, setAddItem]=useState([]);
  const addNode=(node)=>{
    // alert("hiii");
setAddItem((prevData)=>{
  return [...prevData, node]
})

console.log(node)
  };
  return (
    <div>
    <Header />
    <TextCard   passNode={addNode} />
  { addItem.map((curEle, index)=>{
      return<Node
        key={index}
        id={index}
        title={curEle.title}
        contant={curEle.contant}
         />
      
    })
  }

    </div>
  )
}

export default App
