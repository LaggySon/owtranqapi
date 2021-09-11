const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

//GETS ALL POSTS
router.get('/', async (req,res) => {
    try{
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.json({message: err});
    }
})

//SUBMITS A POST
router.post('/', async (req,res) => {
    const post = new Team({
        name: req.body.name,
        link: req.body.link,
        tier: req.body.tier,
        sheet: req.body.sheet,
        _id: req.body._id
    });

    try{
    const savedPost = await post.save()
    res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//SPECIFIC POST
router.get('/:teamId', async (req,res) => {
    try{
    const team = await Team.findById(req.params.teamId);
    res.json(team);
    } catch(err) {
        res.json({message: err});
    }
});

//DELETE POST
router.delete('/:teamId', async (req,res) => {
    try {
    const removedTeam = await Team.remove({_id: req.params.teamId});
    res.json(removedTeam);
    } catch (err) {
        res.json({message: err});
    }
});

//UPDATE A POST
router.patch('/:teamId', async (req,res) => {
    try {
    const updatedTeam = await Team.updateOne({_id: req.params.teamId}, {$set: {name: req.body.name}});
    res.json(updatedTeam);
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;