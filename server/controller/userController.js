import User from "../Model/userSchema.js";

export const addUser = async (request,response)=>{
    const user = request.body;

    const newUser = new User(user);
    try {
        await newUser.save();
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({message:error.message})
    }
}

export const getUser = async(request,response)=>{
    try {
        const users = await User.find({});
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}