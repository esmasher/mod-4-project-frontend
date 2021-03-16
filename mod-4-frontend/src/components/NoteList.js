import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/index';
import { Card, List, Button, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { viewDetails } from '../actions/index';

class NoteList extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notes => {
            this.props.fetchNotes(notes)
        })
    }
    render() {
        return (
            <div class="contact-background-image">
            <Grid centered columns={2}>
            <Grid.Column>
            <Card>
                <h3 align="center">My Notes</h3>
                {this.props.auth.user.notes.map(note => (
                <div key={note.id}>
                    <Card.Content textAlign='center' basic color='black'>
                        <Card.Header> <h3>{note.title}</h3></Card.Header>
                            <List divided verticalAlign='middle'>
                                <List.Item>
                                    <List.Content>
                                        <Button content='Black' onClick={() => this.props.viewDetails(note)}>
                                            <Link basic color='grey' to={`NoteCard/${note.id}`} style={{color: 'grey'}}>View</Link>
                                        </Button>
                                    </List.Content>
                                </List.Item>
                            </List>
                    </Card.Content>
                </div>
    ))}     </Card>
            </Grid.Column>
             </Grid>
            </div>

);
      }
}


const mapStateToProps = (storeState) => {
    return {
        auth: storeState.auth
    }
}

const mapDispatchToProps = {
    fetchNotes: fetchNotes,
    viewDetails: viewDetails
}



export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
