const express = require('express');
const workOut = require('../model/workOutModel');

const{getAllWorkouts, getOneWorkout, createNewWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutControllers');

const router = express.Router();


router.get('/', getAllWorkouts);
router.get('/:id', getOneWorkout);

router.post('/', createNewWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);


module.exports = router;