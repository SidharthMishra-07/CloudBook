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
router.get('/fetchnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  })

  module.exports = router;