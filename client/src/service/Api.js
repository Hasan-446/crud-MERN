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
    console.log("error while get all user API", error);
  }
};


export const GetUserData = async(id)=>{
  try {
    return await axios.get(`${URL}/${id}`)
  } catch (error) {
    console.log("error while getting particular user data Api",error)
  }
} 

export const UpdateUser = async (user,id)=>{
  try {
    return await axios.post(`${URL}/${id}`,user)
  } catch (error) {
    console.log("error while getting particular update user data Api",error)
  }
}

export const deleteUserInfo= async(id)=>{
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log("error while getting particular delete user data Api",error)
  }
}