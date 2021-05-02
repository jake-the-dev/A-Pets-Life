import axios from "axios";

const url = "https://a-pets-life-server.herokuapp.com/memory"; // collection

export const fetchCollection = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);
export const updateMemory = (id, updatedMemory) =>
  axios.PATCH(`${url}/${id}`, updatedMemory);
export const deleteMemory = (id) => axios.delete(`${url}/${id}`);
