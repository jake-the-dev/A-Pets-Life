import axios from "axios";

// implemented safer logic for switching backend source.
// const url = "https://a-pets-life-server.herokuapp.com/memory"; // collection
// const url = "http://localhost:5000/memory";

const TestAPI = "http://localhost:5000";
// const HerokuAPI = "https://a-pets-life-server.herokuapp.com";

const API = axios.create({ baseURL: TestAPI });

export const fetchCollection = () => API.get("/memory");
export const createMemory = (newMemory) => API.post("/memory", newMemory);
export const updateMemory = (id, updatedMemory) =>
  API.patch(`/memory/${id}`, updatedMemory);
export const deleteMemory = (id) => API.delete(`/memory/${id}`);

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
