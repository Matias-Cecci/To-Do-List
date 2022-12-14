import React from "react";
import TodoList from "./todoList";


//create your first component
const Home = () => {
	return (
		<div className="col-6 mx-auto">

			<TodoList/>
		</div>
	);
};

export default Home;
