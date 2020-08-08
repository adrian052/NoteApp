const {Router} = require('express');
const { route } = require('./users');
const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controllers');
const router = Router();

router.route('/')
        .get(getNotes)
        .post(createNote);

router.route('/:id')
        .get(getNote)
        .delete(deleteNote)
        .put(updateNote);

module.exports = router;