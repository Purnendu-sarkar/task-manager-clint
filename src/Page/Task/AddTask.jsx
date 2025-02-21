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
    <div className="container mx-auto p-8 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label className="label">Task Title*</label>
          <input
            type="text"
            placeholder="Enter task title"
            {...register("title", {
              required: "Task title is required",
              maxLength: 50,
            })}
            className="input input-bordered"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">Description (Optional)</label>
          <textarea
            placeholder="Enter task description"
            {...register("description", { maxLength: 200 })}
            className="textarea textarea-bordered"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
