import React, { useState, useEffect } from "react";
import Title from "./title"

function TodoList () {

    const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/matiascecci"
    const [taskList, setTaskList] = useState([])


    //Acá hago el GET para traer la lista entera de tareas
        useEffect(() =>
        
            getTodos()
            , [])

            //METODO PUT - Envío en formato JSON mi lista de tarea entera al servidor. 
            // SOLO CUANDO ACTUALIZO --TASKLIST---
        useEffect(() => {
            if (taskList != []) {
             putTodos()
        }}, [taskList])
   

	const getTodos = async () => {
		const response = await fetch(apiURL);
		const data = await response.json();
        setTaskList(data)
	}

    const putTodos = async () => {
        const response = fetch(apiURL, {
        method: "PUT",
        body: JSON.stringify(taskList),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    
}

    const deleteAll = () => {
        setTaskList([]);
    }

    return(
        <div className="container d-flex justify-content-center flex-column text-center mt-5">
            <Title/>
            <input  
                type="text" 
                className="form-control text-wrap" 
                placeholder="Write your task here!"
                onKeyUp={(e) => {
                    if(e.key === "Enter" && e.target.value.trim() !=""){
                        setTaskList([...taskList, { label: e.target.value, done: false }])
                        e.target.value = "";
                    }}
                }  
            />
            <ul className="list-group">
                {taskList.map((element, index) => {
                return (
                    <li key={index} 
                        className="list-group-item rounded-0 border d-flex justify-content-between align-items-center task-none">
                            {element.label}
                            <i type='button' onClick={() => {
                                setTaskList(taskList.filter((e , i) => i != index))
                            }}
                            className="fa-regular fa-circle-xmark">
                            </i>
                    </li>
                    );
                    })}
                    <li className="list-group-item rounded-0 border text-start text-muted text-wrap"><small>{taskList.length} {taskList.length == 1 ? "item" : "items" } left</small></li>
            </ul>
            <div className="row justify-content-center">
                <button type="button" className="btn btn-primary p-2 mt-3 col-md-4" onClick={deleteAll}>Delete all TASK</button>
            </div>
        </div>
    )
}

export default TodoList;