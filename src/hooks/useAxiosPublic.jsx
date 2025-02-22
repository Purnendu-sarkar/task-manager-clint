import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manager-backend-topaz.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
