import axios from "axios";

// const url = "https://a-pets-life-server.herokuapp.com/memory"; // collection
const url = "http://localhost:5000/memory";

export const fetchCollection = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);
export const updateMemory = (id, updatedMemory) =>
  axios.patch(`${url}/${id}`, updatedMemory);
export const deleteMemory = (id) => axios.delete(`${url}/${id}`);
