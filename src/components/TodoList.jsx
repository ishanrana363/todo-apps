import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/features/todo/todoSlice";


const TodoList = () => {
    const [data,setData] = useState('')
    const todo = useSelector((state) => state.todo);
    console.log(todo);
    const dispatch = useDispatch()
    const addTodoData = () => {
        if(data.trim() !== ''){
            dispatch(addTodo(data))
            setData('')
        }
    };

    return (
        <div className="flex h-screen flex-col items-center justify-center  space-y-4">
            <h2 className="text-xl font-bold">Todo List App</h2>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={data}
                    placeholder="Add a todo"
                    onChange={(e)=>{setData(e.target.value)}}
                    className="px-4 py-2 border border-gray-300 rounded text-black placeholder:text-black"
                />
                <button onClick={addTodoData} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Add
                </button>
            </div>

            <div>
                <ul className="w-full max-w-md">
                    {
                        todo.length > 0 ? todo.map((todo)=>{
                            return (
                                <li key={todo.id} className="border-b border-gray-200 px-4 py-2 text-gray-600">
                                    {todo.title}
                                    <button className="ml-2 text-sm text-red-500 hover:text-red-600" >
                                        Delete
                                    </button>
                                </li>
                            )
                        })
                            
                        : <>
                        <h1>data not found</h1>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
