import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [task, setTask] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    axiosSecure.get(`/tasks/${id}`).then((res) => {
      setTask(res.data);
      reset(res.data);
    });
  }, [id, axiosSecure, reset]);

  const onSubmit = async (data) => {
    const updatedTask = {
      title: data.title,
      description: data.description,
      category: data.category,
      userId: user?.uid,
    };

    try {
      await axiosSecure.put(`/tasks/${id}`, updatedTask);
      Swal.fire({
        icon: "success",
        title: "Task updated successfully!",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/taskBoard");
    } catch (error) {
      console.error("Error updating task:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while updating the task!",
      });
    }
  };

  if (!task)
    return (
      <p className="text-center text-5xl font-extrabold mt-96">
        No TASK AVAILAVALE
      </p>
    );

  return (
    <div className="w-full h-screen p-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="w-full md:w-11/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="block font-medium">Task Title*</label>
            <input
              type="text"
              {...register("title", { required: "Task title is required" })}
              className="w-full p-2 rounded-md border"
            />
          </div>
          <div className="form-control">
            <label className="block font-medium">Description</label>
            <textarea
              {...register("description")}
              className="w-full p-2 rounded-md border"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="block font-medium">Category</label>
            <select
              {...register("category")}
              className="w-full p-2 rounded-md border"
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
