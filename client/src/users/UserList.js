import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Button } from '@material-ui/core'

import { UserAPI } from './UserAPI'

import { UsersGridComponent } from './UsersGridComponent';

const userAPI = new UserAPI()

export class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userAPI.getAllUsers()
            .then(data => this.setState({ users: data.users }))
    }

    render() {
        return (
            <div>
                <h2>User List </h2>
                <br />
                <UsersGridComponent users={this.state.users} />

                <br />
                <Button variant="contained" color="primary" component={Link} to="/users/new">
                    New User
                </Button>
            </div>
        )
    }

}