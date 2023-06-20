import axios from 'axios'
import React from 'react'
// import {GoAlert} from "react-icons/go" 
import {FaTrash} from "react-icons/fa" 
import {RiEdit2Fill} from "react-icons/ri" 
import { baseURL } from '../utils/constant'



function List({id, task, setUpdateUI, updateMode}) {
  const removeTask = ()=>{
    // axios.delete(`${baseURL}/delete/:${id}`)
    // .then((res)=>{
    //   console.log(res.data)
    //   // res.data
    //    setUpdateUI((prevState) => !prevState)
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    })
  }
  return (
   <center> <div className='list-main'>
        {task}
        <div className='icon_holder'>
            <RiEdit2Fill className='icon' onClick={()=> {updateMode (id, task ); removeTask() } } />
            <FaTrash className='icon' onClick={removeTask}/>
        </div>
        {/* {setUpdateUI} */}
    </div></center>
  )
}

export default List
