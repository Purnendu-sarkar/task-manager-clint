import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    try {
      const newTask = {
        title: data.title,
        description: data.description || "No description provided",
        category: "To-Do",
        timestamp: new Date().toISOString(),
        userId: user?.uid,
      };

      const response = await axiosSecure.post("/tasks", newTask);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Task added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding task:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while adding the task!",
      });
    }
  };

  return (
    <div className="w-full h-screen  p-6 rounded-lg shadow-lg bg-white dark:bg-black text-black dark:text-white transition-all">
      <div className="w-full md:w-11/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="block font-medium">Task Title*</label>
            <input
              type="text"
              placeholder="Enter task title"
              {...register("title", {
                required: "Task title is required",
                maxLength: 50,
              })}
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="block font-medium">Description (Optional)</label>
            <textarea
              placeholder="Enter task description"
              {...register("description", { maxLength: 200 })}
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
