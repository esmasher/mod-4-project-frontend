import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/index';
import { Link } from 'react-router-dom'
import { Button,Card, List, Grid } from 'semantic-ui-react';


class NoteCard extends React.Component {

handleUpdate = (event) => {
    event.preventDefault()
    this.props.updateNote(this.props.note)
    // this.props.history.push('/notelist')
}

handleDelete = (event) => {
  event.preventDefault()
  const reqObj = {
      method: 'DELETE'
  }


  fetch(`http://localhost:3000/notes/${this.props.note.id}`, reqObj)
  .then(resp => resp.json())
  .then(data => {
      console.log(data)
    this.props.deleteNote(this.props.note.id)
    this.props.history.push('/notelist')
  })
}
    render(){
        return (
            <div class="contact-background-image">
            <Grid centered columns={2}>
              <Grid.Column>
                <Card>
                <h3 align="center">Note Details</h3>
                    <Card.Content textAlign='center'>
                        <Card.Header> <h3>{this.props.note.title}</h3></Card.Header>
                            <List divided verticalAlign='middle'>
                            <List.Item>
                            <List.Content>
                                {this.props.note.content}<br></br><br></br>
                              <Button basic color='grey'><Link to={`/notecard/${this.props.note.id}/edit`} style={{color: 'grey'}}>Edit</Link> </Button>
                              <Button basic color='grey' onClick={this.handleDelete}>Delete Note</Button><br></br>
                            </List.Content>
                            </List.Item>
                            </List>
                     </Card.Content>
                  </Card>
              </Grid.Column>
            </Grid>
            </div>
          );
    }
    }


const mapStateToProps = (storeState) => {
    return {
        note: storeState.note
    }
}

const mapDispatchToProps = {
  deleteNote: deleteNote
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteCard)

     // <div className="item">
            //     <div className="center item">
            //   <div className="middle aligned content">
            //     <div className="header">{`"${this.props.note.title}"`}</div>
            //     {this.props.note.content}

            //     <br></br>
            //     <Button basic color='grey' onClick={this.handleDelete}>Delete Note</Button><br></br>
            //     {/* <button onClick={this.handleUpdate}>Edit Note</button> */}
            //     {/* <Button basic color='grey' onClick={() => this.props.updateNote(this.props.note)}> */}
            //     <Button basic color='grey'>
            //                     <Link to={`/notecard/${this.props.note.id}/edit`}>Edit</Link> </Button>
            //     {/* <button onClick={() => (this.props.deleteNote(this.props.note.id)) (this.handleClick)}>Delete Note</button> */}

            //   </div>
            //   </div>
            // </div>
