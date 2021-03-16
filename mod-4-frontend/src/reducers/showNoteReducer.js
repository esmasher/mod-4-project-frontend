const showNoteReducer = (state= null, action) => {
  // let updatedState
switch(action.type) {
        case 'VIEW_DETAILS':
          return action.note
          case 'UPDATE_NOTE':
          return action.note
          case 'CREATE_NOTE':
            return action.note
          // updatedState =  state.map(note => note.id === action.id ? {
          //   ...note, title: action.title, content:action.content}
          //   : note)
            // return updatedState
            default:
            return state}
            }

export default showNoteReducer
