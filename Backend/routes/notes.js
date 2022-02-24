const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Fetch all notes from the User using GET "/api/notes/fetchnotes".
router.get('/fetchnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  })

//ROUTE 2: Fetch new notes from the User using POST "/api/notes/fetchnotes".
router.post('/addnote', fetchUser,[
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('description','Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const {title,description} = req.body;

    //If there are errors then return 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
      return res.status(400).json({ errors: errors.array() });  
    }
    const note = new Note({
      title,
      description,
      user: req.user.id
    })
    note.save()

    res.json(notes)
  })

  module.exports = router;