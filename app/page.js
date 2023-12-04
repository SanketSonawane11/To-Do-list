'use client'
import { Titillium_Web } from 'next/font/google';
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
  const [Title, setTitle] = useState('');
  const [Des, setDes] = useState('');
  const [todos, settodos] = useState([]); 
  const [completedTasks, setcompletedTasks] = useState([]);
  // const [Number, setNumber] = useState("");
  const submitlist = (e) =>{
    e.preventDefault();
    settodos([...todos, {Title, Des}]);
    // console.log(todos);
    setTitle("");
    setDes("");
  }


  const deletetask = (i) =>
  {
    let copytodo = [...todos];
    copytodo.splice(i, 1);
    settodos(copytodo);
  }

  const completed = (i) => {
    let copytodo = [...todos];
    let completedTask = copytodo.splice(i, 1)[0]; 
    setcompletedTasks([...completedTasks, completedTask]);
    settodos(copytodo); 
  }

  let dft = <p className='defaultext'>Yayy! No tasks ramaining</p>

  if(todos.length > 0)
  {
    dft = todos.map((t, i) =>
  {
    return(
      <li>
        <div className='tasklist'>

          <h3 className='taskname'> {t.Title} </h3>
          <p className='taskdesc'>{t.Des}</p>
          <div className='actions'>
            <button className='delete' onClick={() =>
            {
              deletetask(i);
            }}>Remove</button>
            <button className='done' onClick={() =>
            {
              completed(i);
            }}>Done</button>
          </div>

        </div>
      </li>
    )
  })
  }

    let complete = <h2 className='defaultext'>Finish up bud</h2>

    if(completedTasks.length>0)
    {
      complete = completedTasks.map((t, i) =>
      {
        return(
          <li>
            <div className='tasklist'>

            <h3 className='taskname'> {t.Title} </h3>
            <p className='taskdesc'>{t.Des}</p>

            </div>
          </li>
        )
      })
    }


  console.log(todos);
  return (  
    <>

      <div className='w-[100vw] bg-slate-900 flex items-center justify-center text-white p-[2vw]'>
        <h1 className="text-3xl font-bold">ToDo List</h1>
      </div>
      <div className='input pt-[3vw]'>
      
        <form className='px-[5vw]' onSubmit={submitlist}>
          <input className='rounded-[1.2vw] m-[0.2vw] font-semibold border-[0.1vw] px-[1vw] border-transparent p-[0.3vw]' type='text' placeholder='The thing' value={Title} 
          onChange={(e) =>
          {
            setTitle(e.target.value);
          }}/> 
          
          <br/>

          <input className='rounded-[1.2vw] m-[0.2vw] font-semibold px-[1vw] border-[0.1vw] border-transparent p-[0.3vw]' type='text' placeholder='More about it...' value={Des} 
          onChange={(e) =>
          {
            setDes(e.target.value);
          }}/>


          
          <button className='addbtn ml-[1vw] h-[2.5vw] w-[10vw] bg-transparent' onClick={submitlist}>Add</button>
        </form>

        <div className='mainlist  w-[100vw] my-[3vw] bg-lime-300 rounded-[1vw] flex justify-center items-center'>

          <table className='tableheading'>

            <th>Thing Name</th>
            <th>Description</th>
            <th>Actions</th>

          </table>

          <ul className='tasklisst'>
            {dft}
          </ul>

        </div>

        <div className='donetasks mainlist w-[100vw] my-[3vw] bg-lime-300 rounded-[1vw] flex justify-center items-center'>

          <h1 className='font-bold'>Completed tasks</h1>

        <table className='tableheading'>

          <th>Thing Name</th>
          <th>Description</th>

        </table>

          <ul className='comlist'>

            {complete}

          </ul>

        </div>
        
      </div> 

      <div className='number'>

        {/* <form>
          Number: <input className='rounded-[1.2vw] border-transparent ml-[0.2vw] px-[0.7vw]' placeholder='number goes here'  type='number' value={Number}
          onChange={(e) =>{
            setNumber(e.target.value);
            console.log(Number);
          }}></input>
        </form> */}

      </div>     
    </>
  )
}

export default page