import React, {useState, useCallback} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
    console.log("App Component");

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log('newTodoData', newTodoData);
        // this.setState({ todoData: newTodoData });
        setTodoData(newTodoData);
    }, [todoData]);

    const handleSubmit = (e) => {
        e.preventDefault(); // 페이지 새로고침 막기

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };

        // 새로운 할일 리스트에 더해주기
        // this.setState({ todoData: [...todoData, newTodo], value: "" })
        setTodoData(prev => [...prev, newTodo])
        setValue("");
    }

    const handleRemove = () => {
        setTodoData([]);
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow-xl lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>할 일 목록</h1>
                    <button onClick={handleRemove}>Delete All</button>
                </div>

                <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>

                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

            </div>
        </div>
    );
}