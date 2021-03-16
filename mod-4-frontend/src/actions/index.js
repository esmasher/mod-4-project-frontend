export const fetchNotes = (notes) => {
    return {
        type: 'FETCH_NOTES',
        notes: notes
    }
}

export const viewDetails = (note) => {
    return {
        type: 'VIEW_DETAILS',
        note: note
    }
}

export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user: user
    }
}

export const updateNote = (note) => {
    return {
        type: 'UPDATE_NOTE',
        note: note
    }
}

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id: id
    }
}

export const createNote = (note) => {
    return {
        type: 'CREATE_NOTE',
        note: note
    }
}
