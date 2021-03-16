import { combineReducers } from "redux";
import notesReducer from './notesReducer'
import showNoteReducer from './showNoteReducer'
import auth from './auth'

export default combineReducers({
    notes: notesReducer,
    note: showNoteReducer,
    auth: auth

});
