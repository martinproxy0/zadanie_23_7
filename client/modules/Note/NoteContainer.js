import { connect } from 'react-redux';
import Notes from './Notes';
import { editNote, createNoteRequest, updateNoteRequest, deleteNoteRequest } from './NoteActions';

const mapDispatchToProps = {
  editNote,
  createNote: createNoteRequest,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
