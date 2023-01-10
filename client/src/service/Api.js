import React from "react";
import axios from "axios";

const URL = "http://localhost:8000";

export const AddingUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("errrorrrrrrrrrrrr", error);
  }
};

export const GetUser = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("error while get user API", error);
  }
};
