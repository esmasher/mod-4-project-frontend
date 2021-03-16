const initialState= []

const notesReducer = (state= initialState, action) => {
let updatedState
    switch(action.type) {
        case 'FETCH_NOTES':
          return action.notes
          case 'DELETE_NOTE':
            updatedState = state.filter(note => note.id !== action.id )
            return updatedState
            case 'CREATE_NOTE':
              updatedState = {...state, notes: action.note}
              return updatedState

        default:
          return state }


}

export default notesReducer
