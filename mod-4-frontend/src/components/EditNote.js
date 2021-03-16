import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, TextArea } from 'semantic-ui-react';
import { updateNote } from '../actions/index';

class EditNote extends React.Component {
    state = {
        title: '',
        content: ''
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
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch(`http://localhost:3000/notes/${this.props.note.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.props.updateNote(this.props.note)
            this.props.history.push('/notelist')
    })}

    render(){
        return (
            <div class="contact-background-image">
                <Segment inverted>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                        fluid label='Title'
                        placeholder= {this.props.note.title}
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}/>
                        <Form.Input
                        control={TextArea}
                        fluid label='Content'
                        placeholder= {this.props.note.content}
                        name='content'
                        value={this.state.content}
                        onChange={this.handleChange}/>
                        <Form.Input
                        fluid label='Name'
                        placeholder= {this.props.auth.user.name}
                        name='Author'
                        readOnly
                        // value={this.props.note.user.id}
                        />
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
        note: storeState.note,
        auth: storeState.auth
    }
}

const mapDispatchToProps = {
    updateNote: updateNote
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
