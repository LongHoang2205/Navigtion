import { create } from "apisauce";

const api = create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com",
});

const LoginApi = async (action) => {
  const username = action.payload.username;
  const password = action.payload.password;

  return await api.post("/user/login", {
    email: username,
    password: password,
  });
};

export { LoginApi };
