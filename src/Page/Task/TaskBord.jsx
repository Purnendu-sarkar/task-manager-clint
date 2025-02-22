import React, { useEffect, useState } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  FaTasks,
  FaSpinner,
  FaCheckCircle,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import moment from "moment";

const categoryStyles = {
  "To-Do": "bg-blue-200 dark:bg-blue-600 border-blue-400 dark:border-blue-500",
  "In Progress":
    "bg-yellow-200 dark:bg-yellow-600 border-yellow-400 dark:border-yellow-500",
  Done: "bg-green-200 dark:bg-green-600 border-green-400 dark:border-green-500",
};

const categoryIcons = {
  "To-Do": <FaTasks className="text-blue-600 dark:text-blue-200" />,
  "In Progress": <FaSpinner className="text-yellow-600 dark:text-yellow-200" />,
  Done: <FaCheckCircle className="text-green-600 dark:text-green-200" />,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const categories = ["To-Do", "In Progress", "Done"];

  useEffect(() => {
    axios
      .get("https://task-manager-backend-topaz.vercel.app/tasks")
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
      .put(`https://task-manager-backend-topaz.vercel.app/tasks/${taskId}`, {
        category: newCategory,
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`https://task-manager-backend-topaz.vercel.app/tasks/${taskId}`)
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== taskId)
        );
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-5">
        Task Management Board
      </h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <Droppable droppableId={index.toString()} key={category}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`p-4 rounded-lg shadow-md border ${categoryStyles[category]}`}
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    {categoryIcons[category]} {category}
                  </h3>
                  <div className="space-y-3">
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
                              className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg border flex flex-col gap-2"
                            >
                              <span
                                className={`px-2 py-1 text-xs font-bold rounded ${categoryStyles[category]}`}
                              >
                                {category}
                              </span>
                              <h4 className="font-medium text-gray-900 dark:text-gray-100 text-lg">
                                {task.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {task.description}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {moment(task.timestamp).format(
                                  "MMM D, YYYY h:mm A"
                                )}
                              </p>
                              <div className="flex justify-end gap-2 mt-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                  <FaEdit />
                                </button>
                                <button
                                  onClick={() => deleteTask(task._id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <FaTrash />
                                </button>
                              </div>
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
