import axios from "axios";

// implemented safer logic for switching backend source.
// const url = "https://a-pets-life-server.herokuapp.com/memory"; // collection
// const url = "http://localhost:5000/memory";

const TestAPI = "http://localhost:5000";
// const HerokuAPI = "https://a-pets-life-server.herokuapp.com";

const API = axios.create({ baseURL: TestAPI });

// Interceptors
// You can intercept requests or responses before they are handled by 'then' or 'catch'.
// token has to start with "Bearer"
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchCollection = () => API.get("/memory");
export const createMemory = (newMemory) => API.post("/memory", newMemory);
export const updateMemory = (id, updatedMemory) =>
  API.patch(`/memory/${id}`, updatedMemory);
export const deleteMemory = (id) => API.delete(`/memory/${id}`);

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
