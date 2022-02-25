const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Fetch all notes from the User using GET "/api/notes/fetchnotes".
router.get('/fetchnotes', fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//ROUTE 2: Fetch new notes from the User using POST "/api/notes/addnote".
router.post('/addnote', fetchUser, [
  body('title', 'Enter a valid title').isLength({ min: 3 }),
  body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  try {
    const { title, description } = req.body;

    //If there are errors then return 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Notes({
      title,
      description,
      user: req.user.id
    })
    const savedNote = await note.save()

    res.json(savedNote)
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//ROUTE 2: Fetch new notes from the User using POST "/api/notes/updatenote".
router.put('/updatenote/:id', fetchUser, async (req, res) => {
  const{title, description} = req.body;
  const newNote = {};
  if(title){newNote.title = title};
  if(description){newNote.description = description};

  const note = await Note.findById(req.params.id);
  if(!note){return res.status(404).send("Not Found")}

  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Unauthorised Access");
  }

  note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
})

module.exports = router;