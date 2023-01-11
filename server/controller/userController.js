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

export const getUserData = async(request,response)=>{
    
    try {
        const user = await User.findById(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const updateUser =async(request,response)=>{

    const user = request.body;
    const updatedUser = new User(user);

    try {
        await User.updateOne({_id:request.params.id},updatedUser)
        response.status(201).json(updatedUser)
    } catch (error) {
        response.status(409).json({message:error.message})
    }
}