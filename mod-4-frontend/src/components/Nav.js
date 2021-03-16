import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Nav = () => {


  return (
    <div class="nav-bar">
      <Segment inverted>
        <div className="ui menu">
          <div className="left menu">
            <Button inverted color='black' ><Link to={`/allnotes`} style={{color: 'grey'}}>SparkleNotes</Link></Button>
          </div>
        <div className="right menu">
            <Button inverted color='black'><Link to={`/notelist`} style={{color: 'grey'}}>My Notes</Link></Button>
            <Button inverted color='black' ><Link to= {`/newnote`} style={{color: 'grey'}}>New Note</Link></Button>
            <Button inverted color='black'><Link to={`/login`} style={{color: 'grey'}}>Login</Link></Button>

        </div>
      </div>
    </Segment>
  </div>
  );
};

export default Nav;
