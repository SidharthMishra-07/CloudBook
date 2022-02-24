const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');

//ROUTE 1: Fetch all notes from the User using GET "/api/auth/fetchnotes"
router.get('/fetchnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  })

  module.exports = router;