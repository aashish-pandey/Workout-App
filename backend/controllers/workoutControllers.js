const workOut = require('../model/workOutModel');
const mongoose = require('mongoose');


//get all workouts

const getAllWorkouts = async (req, res)=>{
 
    const workout = await workOut.find({}).sort({createdAt: -1});
    
    res.json(workout);
}

//get single workout

const getOneWorkout = async(req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({msg:"bro id nai milena vanya k"});
    }else{
        const workout = await workOut.findById({_id:id});
        res.json(workout);
    }



}

//create a new workout

const createNewWorkout = async(req, res)=>{

    try{
        const workout = await workOut.create({
            ...req.body
        });
    
        res.json(workout);
    }
    catch(err){
        res.json({msg : err});
    }
    
}


//delete an existing workout

const deleteWorkout = async (req, res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({msg: "bro lyang nahan na k delete garnu id nai milena k"});
    }else{
        try{
            const workout = await workOut.findOneAndDelete({_id:id});
            res.json(workout);
        }catch{
            res.json({msg: "bro delete nai vayena na k, ma catc block bata aako"});
        }
    }
}



//update an existing workouts

const updateWorkout = async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({msg : "last k bro, kati id wrong deko, ma patch bata "});
    }else{
        try{
            const workout = await workOut.findOneAndUpdate({_id:id}, {
                ...req.body
            })

            res.json(workout);
        }catch(err){
            res.json({msg: "kya lang k, patch ma ni catch error"})
        }
    }
}



module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    deleteWorkout,
    updateWorkout
}