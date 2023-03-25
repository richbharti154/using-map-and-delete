import React from "react";
import "./style.css";
import {useState} from 'react';
const data=[
  {
    name:'richa',
    age:'20',
  },
  {
    name:'ritika',
    age:'26',
  },
  {
    name:'shivani',
    age:'17',
  },
  {
    name:'kittu',
    age:3,
  },
  {
    name:'choti',
    age:18,
  },
]


export default function App() {
  const[updateData,setUpdateData]=useState(data)
  function deleteButton(index){
  const newData=updateData.filter((element)=>element!==data[index])
  console.log(newData)
  setUpdateData([...newData])

  }
  return (
    <div>
     {updateData.map((element,index)=>(
     <div className='style'>
       <p>{element.name}</p>
       <p>{element.age}</p>
       <button onClick={()=>deleteButton(index)} style={{margin:'5px'}}>Delete button</button>
       </div>
     ))}
    </div>
    
  );
}
