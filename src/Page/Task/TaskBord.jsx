import React, { useEffect, useState } from "react";
import axios from "axios";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const categories = ["To-Do", "In Progress", "Done"];

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Function to handle drag and drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const taskId = result.draggableId;
    const newCategory = categories[destination.droppableId];

    // Update task category locally
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, category: newCategory } : task
      )
    );

    // Send update request to backend
    axios
      .put(`http://localhost:5000/tasks/${taskId}`, { category: newCategory })
      .catch((error) => console.error("Error updating task:", error));
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-5">
        Task Management Board
      </h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <Droppable droppableId={index.toString()} key={category}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="space-y-2">
                    {tasks
                      .filter((task) => task.category === category)
                      .map((task, idx) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={idx}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-white p-3 shadow rounded"
                            >
                              <h4 className="font-medium">{task.title}</h4>
                              <p className="text-sm text-gray-600">
                                {task.description}
                              </p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;
