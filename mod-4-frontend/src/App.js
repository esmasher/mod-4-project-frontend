// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteCard from './components/NoteCard';
import Login from './components/Login';
import Nav from './components/Nav';
import NewNote from './components/NewNote.js';
import EditNote from './components/EditNote';
import AllNotes from './components/AllNotes';
import { BrowserRouter, Route} from 'react-router-dom';

const App = () => {

  return (

    <BrowserRouter>
        <Nav />
        <Route exact path="/notelist" component={NoteList} />
        <Route exact path="/notecard/:id" component={NoteCard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newnote" component={NewNote} />
        <Route exact path="/notecard/:id/edit" component={EditNote} />
        <Route exact path="/allnotes" component={AllNotes} />
    </BrowserRouter>

  );
}

export default App;
