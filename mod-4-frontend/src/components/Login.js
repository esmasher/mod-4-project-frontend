import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index'

class Login extends React.Component {
    state = {
        name: 'Esma',
        password: 'xzy',
        error: ''
    }

    handleChange=(event) => {
        console.log('change')
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(event.target)
        event.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)

            if (data.error){
                console.log("error")
                this.setState({
                    error: data.error
                })
            }
            else { console.log("no error")
                this.props.loginSuccess(data)
                this.setState({
                    name: '',
                    passowrd: ''
                })
                this.props.history.push('/notelist')
            }
        }
    )
}
    render(){
        return (
            <div class="contact-background-image">
            <Segment inverted>
                { this.state.error ? <h4 style={{color: 'white'}}>{this.state.error}</h4> : null}
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' placeholder='Username'  name={'name'} onChange={this.handleChange} value={this.state.name}/>
                        <Form.Input fluid label='Password' placeholder='Password'  name={'password'} onChange={this.handleChange} value={this.state.password}/>
                    </Form.Group>
                        <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
  }

  export default connect(null, mapDispatchToProps)(Login)
