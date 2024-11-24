import React from 'react'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export default function List({todoData, setTodoData}) {

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

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log('newTodoData', newTodoData);
        // this.setState({ todoData: newTodoData });
        setTodoData(newTodoData);
    }

    return (
        <div>
            <DragDropContext>
                <Droppable droppableId="to-dos">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div key={data.id}
                                             {...provided.draggableProps}
                                             ref={provided.innerRef}
                                             {...provided.dragHandleProps}
                                             className={"flex items-center justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"}>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    onChange={() => handleCompleChange(data.id)}
                                                    defaultChecked={false}
                                                />{" "}
                                                <span
                                                    className={data.completed ? "line-through" : undefined}>{data.title}</span>
                                            </div>
                                            <div className={"items-center"}>
                                                <button className={"px-4 py-2 float-right"}
                                                        onClick={() => handleClick(data.id)}>
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
