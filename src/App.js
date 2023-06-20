// import './App.css';
import React, { useEffect, useState } from "react";
import List from "./component/List";
import axios from "axios"
import { baseURL } from "./utils/constant";

function App() {
  const [Input, setInput] = useState("")
  const [Task, setTask] = useState([])
  const [UpdateUI, setUpdateUI] = useState(false)
  const [UpdateId, setUpdateId] = useState(null)

  useEffect(()=>{
axios.get(`${baseURL}/get`)
.then((res)=>{
  console.log(res.data)
  setTask(res.data)
})
},[UpdateUI])

const addTask = ()=>{
  axios.post(`${baseURL}/save`,{task: Input}).then((res)=>{
    console.log(res.data);
    setInput("") 
    setUpdateUI((prevState)=> !prevState)
    // console.log(res.data);
  })
}
// const addTask = () => {
//   axios.post(`${baseURL}/save`, { task: Input }).then((res) => {
//     console.log(res.data);
//     setInput("");
//     setUpdateUI((prevState) => !prevState);
//     localStorage.setItem('task', JSON.stringify(res.data)); // Store the task in localStorage
//   });
// };

// Retrieve the task from localStorage when the page loads
// useEffect(() => {
//   const savedTask = localStorage.getItem('task');
//   if (savedTask) {
//     setInput(JSON.parse(savedTask));
//   }
// }, []);

const updateMode = (id , text) =>{
  console.log(text)
  setInput(text)
  setUpdateId(id)
}

return (
  
  <div className="App">
    <main>
      <h1 className="title">Crud Operation</h1>
      <div className="input_holder">
        <input type="text" value={Input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit" onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {Task.map((task)=> (
          <List 
          key={task._id}
          id = {task._id} 
          task={task.task} 
          setUpdateUI={setUpdateUI}
          updateMode = {updateMode}/>
          ))}
        {/* <List task="something" /> */}
      </ul>
    </main>
    </div>
  );
}

export default App;



 

// https://www.deepcode.ai/
// https://www.tabnine.com/
// https://github.com/features/copilot
// https://mintlify.com/
// https://openai.com/blog/chatgpt