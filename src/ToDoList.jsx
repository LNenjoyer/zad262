import React,{useState} from "react";
function ToDoList(){

    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function  addTask() {
        if(newTask.trim() !==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    

    return(
    <div className="toDoList">
        <h1>To Do List</h1>
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}/>
            <button
            className="addButton"
            onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="deleteButton"
                        onClick={()=>deleteTask(index)}>
                        Delete
                    </button>
                    
                    
                </li>)}
        </ol>
    </div>
    );
}
export default ToDoList