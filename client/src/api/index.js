import axios from "axios";

const url = "http://localhost:5000/posts"; // collection

export const fetchCollection = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);
