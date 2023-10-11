import axios from "axios";

const getUserName = async () => {
  const response = await axios.get("http://localhost:3001/name");
  return response.data;
};

const getUserPhoto = async () => {
  const response = await axios.get("http://localhost:3001/photo");
  return response.data;
};

const getAccountCreation = async () => {
  const response = await axios.get("http://localhost:3001/account-creation");
  return response.data;
};

export { getUserName, getUserPhoto, getAccountCreation };
