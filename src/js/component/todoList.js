import React, { useState } from "react";
import Title from "./title"

function TodoList () {

    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const addTask = (e) => {
        if(e.key == "Enter" && e.target.value.trim() !=""){
        setTask("");
        setTaskList([...taskList, task])
    }}

    const deleteTask = (index) => {
        setTaskList(taskList =>[
            ...taskList.slice(0, index),
            ...taskList.slice(index + 1, taskList.length)
            ]);
    }

    return(
        <div className="container d-flex justify-content-center flex-column text-center mt-5">
            <Title/>
            <input  
                type="text" 
                className="form-control text-wrap" 
                placeholder="Write your task here!"
                onChange={(e) => setTask(e.target.value)} 
                onKeyUp={addTask}
                value={task}
            />
            <ul className="list-group">
                {taskList.map((element, index) => {
                return (
                    <li key={index} 
                        className="list-group-item rounded-0 border d-flex justify-content-between align-items-center task-none">
                            {element}
                            <i type='button' onClick={() => deleteTask(index)} className="fa-regular fa-circle-xmark"></i>
                    </li>
                    );
                    })}
                    <li className="list-group-item rounded-0 border text-start text-muted text-wrap"><small>{taskList.length} {taskList.length == 1 ? "item" : "items" } left</small></li>
            </ul>
        </div>
    )
}

export default TodoList;