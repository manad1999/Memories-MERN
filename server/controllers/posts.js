import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try
    {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch(error)
    {
        res.status(404).json({message : error.message});
    }

}

export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = new PostMessage(post);

    try
    {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){

        res.status(409).json({message: error.message});

    }

}

export const updatePost = async (req, res) => {
    console.log("I");
    const {id : _id } = req.params;
    const post = req.body;

    console.log(_id);
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send('No Posts found');
    }
    console.log(_id);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post , id:_id} , {new: true});
    res.json(updatedPost); 

}

export const deletePost = async (req, res) => {
    console.log("In Delete");

    const { id : _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send("No Posts found");
    }

    await PostMessage.findByIdAndDelete(_id);

    res.send("Deleted Successfully");
}

export const likePost = async (req, res) => {
    console.log("In Like");

    const { id : _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send("No Posts found");
    }

    const post = await PostMessage.findById(_id);
    console.log(post);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id , {likeCount: post.likeCount + 1}, {new:true});

    res.status(200).send(updatedPost);

}