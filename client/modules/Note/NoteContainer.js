import { connect } from 'react-redux';
import Notes from './Notes';
import { editNote, updateNoteRequest } from './NoteActions';

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
