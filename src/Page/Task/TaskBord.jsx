import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  console.log(tasks);

  const categories = ["To-Do", "In Progress", "Done"];

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-5">
        Task Management Board
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {categories.map((category) => (
          <div key={category} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">{category}</h3>
            <div className="space-y-2">
              {tasks
                .filter((task) => task.category === category)
                .map((task) => (
                  <div key={task._id} className="bg-white p-3 shadow rounded">
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
