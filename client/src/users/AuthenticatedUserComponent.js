import React, { Component } from "react";
import { Avatar, Divider } from "@material-ui/core";
import { People, VerifiedUser } from "@material-ui/icons";
import { UserAPI } from "./UserAPI";

const userAPI = new UserAPI()

export class AuthenticatedUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            logged: false
        }
    }

    getUser = () => {
        userAPI.getAuthenticatedUser()
            .then(data => {
                if (data.user)
                    this.setState({ user: data.user, logged: true })
            })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        return (
            <div>
                <div align='center'>
                    <Avatar>
                        <VerifiedUser />
                    </Avatar>
                </div>
                {this.state.logged && (
                    <h3>{this.state.user.username}</h3>
                )}
                <Divider />
            </div>
        );
    }
}