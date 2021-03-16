const auth = (state = null, action) => {
  let updatedState
    switch(action.type){
      case 'LOGIN_SUCCESS':
        return {
          user: action.user
        }
        case 'CREATE_NOTE':
          const updatedUser = {...state.user}
          updatedUser.notes = [...updatedUser.notes, action.note]
          return {user: updatedUser}
              // updatedState = {...state, notes: [...state.user.notes, action.note]}
              // return updatedState
            //   case 'DELETE_NOTE':
            //     const notes = state.user.notes
            // updatedState = notes.filter(note => note.id !== action.id )
            // return updatedState
      default:
        return state
    }
  }

  export default auth
