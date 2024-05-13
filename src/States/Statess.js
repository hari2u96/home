import React, { useState } from 'react'

function Statess() {
    // Example1
    const [num,setNum]=useState(0)
    // Example 2
    const [name,setName]=useState("Mayila")
    // Example 3
    const [bike,setBike]=useState(
        {
         name :"Bullet",
         model:2016,
         make:"Royal Enfiled"
        }
        )
   // Example 4
   const [list,setList]=useState([]) 
   const [count,setCount]=useState(1)

    // Example 1
    function increNum(){
        setNum(num+1)
    }
    function decreNum(){
        setNum(num-1)
    }
    // Example 2
    function changeName(){
        setName("Laya")
    }
    // Example 3
    function updateModel(){
        setBike((prevState)=>{
          return{...prevState,model:2018}
        })
    }
    // Example 4
     function addItem(){
      const itemName ="Item"+count;
      setList((prevState)=>{return [...prevState,itemName]})
      setCount((prevState)=>{return prevState+1})
     }
  return (
    <div>
        {/* Example 1 */}
      <h1>{num}</h1>
      <button onClick={increNum}>+</button>
      <button onClick={decreNum}>-</button>
      {/* Example 2 */}
      <h1>papa Name is {name}</h1>
      <button onClick={changeName}>Change Name</button>
      {/* Example 3 */}
      <p>My bike name is {bike.name} </p>
      <p>My bike model is {bike.model}</p>
      <p>My bike make is {bike.make}</p>
      <button onClick={updateModel}>Change Model</button>
     
      {/* EXAMPLE 4 */}
      <p>List</p>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {list.map((el,index) => <li key={index}>{el}</li>)}
      </ul>

    </div>
  )
}

export default Statess