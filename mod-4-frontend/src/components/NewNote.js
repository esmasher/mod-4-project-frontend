import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/index';
import { createNote } from '../actions/index';
import { Link } from 'react-router-dom'

class NewNote extends React.Component{
    state = {
        title: '',
        content: '',
        user_id: this.props.auth.user.id
    }

    handleChange = (event) => {
        console.log('change handled')
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        console.log('submit handled')
        event.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.createNote(note)
            this.props.history.push('/notelist')

            // fetch('http://localhost:3000/notes')
            // .then(resp => resp.json())
            // .then(notes => {
            // this.props.fetchNotes(notes)
            //
        // })
            // return 'This note has been submitted'
    })}

    render (){
        return (
            <div class="contact-background-image">
                <Segment inverted>
            <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                        fluid label='Title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}/>
                        <Form.Input
                        fluid label='Content'
                        name='content'
                        value={this.state.content}
                        onChange={this.handleChange}/>
                    <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
                </Segment>
                </div>
                )
            }
        }
const mapStateToProps = (storeState) => {
    return {
        auth: storeState.auth
    }
}

const mapDispatchToProps = {
    createNote: createNote,
    fetchNotes: fetchNotes
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)
