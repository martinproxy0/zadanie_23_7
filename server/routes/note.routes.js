import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Edit a new Note
router.route('/notes').put(NoteController.editNote);

// Delete Note by noteId
router.route('/notes').delete(NoteController.deleteNote);

export default router;
