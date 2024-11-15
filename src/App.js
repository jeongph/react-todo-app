import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    console.log('newTodoData', newTodoData);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  }

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

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data;
    });
    // this.setState({ todoData: newTodoData })
    setTodoData(newTodoData);
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              onChange={() => handleCompleChange(data.id)}
              defaultChecked={false}
            />
            {data.title}
            <button
              style={btnStyle}
              onClick={() => handleClick(data.id)}>x</button>
          </div>
        ))}

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>

      </div>
    </div>
  );
}