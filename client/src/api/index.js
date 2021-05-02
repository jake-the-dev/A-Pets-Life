import axios from "axios";

const url = "http://localhost:5000/memory"; // collection

export const fetchCollection = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);
export const updateMemory = (id, updatedMemory) =>
  axios.PATCH("${url}/${id}", updatedMemory);
