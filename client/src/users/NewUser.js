import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Grid, TextField, Typography, Button } from '@material-ui/core'
import { UserAPI } from './UserAPI'


const userAPI = new UserAPI();

const user_css = {

    custom_button: {
        padding: '5px'
    }

}


export class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.save = this.save.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    save = () => {
        let user = {
            name: this.state.name,
            surname: this.state.surname
        }
        userAPI
            .newUser({ "user": user })
            .then(data => {
                this.props.history.push('/users')
            })
    }

    render() {
        return (
            <div>
                <h2>New User </h2>
                <br />

                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h3">
                            User Data
                        </Typography>
                        <Grid container spacing={8}>
                            <Grid item xs={3}>
                                <TextField
                                    id="user_name"
                                    label="Name"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    required="true"
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    id="user_surname"
                                    label="Surname"
                                    value={this.state.surname}
                                    onChange={this.handleChange('surname')}
                                    margin="normal"
                                    required="true"
                                />
                            </Grid>
                        </Grid>

                        <br />

                        <Grid>
                            <Button className={user_css.custom_button} name="Save" variant="contained" color="primary" onClick={this.save}>
                                Save
                            </Button>

                            <Button variant="contained" color="secondary" component={Link} to="/users">
                                Cancel
                            </Button>
                        </Grid>

                    </CardContent>
                </Card>

            </div >
        );
    }

}