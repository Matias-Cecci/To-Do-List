import React, { useState } from "react";
import Title from "./title"

function TodoList () {

    const [taskList, setTaskList] = useState([])

    return(
        <div className="container d-flex justify-content-center flex-column text-center mt-5">
            <Title/>
            <input  
                type="text" 
                className="form-control text-wrap" 
                placeholder="Write your task here!"
                onKeyUp={(e) => {
                    if(e.key === "Enter" && e.target.value.trim() !=""){
                        setTaskList([...taskList, e.target.value])
                        e.target.value = ""
                    }}
                }  
            />
            <ul className="list-group">
                {taskList.map((element, index) => {
                return (
                    <li key={index} 
                        className="list-group-item rounded-0 border d-flex justify-content-between align-items-center task-none">
                            {element}
                            <i type='button' onClick={() => {
                                setTaskList(taskList.filter((e,i) => i != index))
                            }}
                            className="fa-regular fa-circle-xmark">
                            </i>
                    </li>
                    );
                    })}
                    <li className="list-group-item rounded-0 border text-start text-muted text-wrap"><small>{taskList.length} {taskList.length == 1 ? "item" : "items" } left</small></li>
            </ul>
        </div>
    )
}

export default TodoList;