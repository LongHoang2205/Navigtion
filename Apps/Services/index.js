import { create } from "apisauce";

const apiInformation = create({
  //baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "http://localhost:3000",
});

export const getInformationApi = async () => {
  //const response = await apiInformation.get("/users");
  const response = await apiInformation.get("/iphone");
  return response;
};
