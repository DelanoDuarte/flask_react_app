import React, { Component } from 'react'
import { Card, CardContent, Grid, TextField, CardHeader, Typography, Button } from '@material-ui/core'
import { UserAPI } from './UserAPI'


const userAPI = new UserAPI();

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

        userAPI.newUser({ "user": user })
            .then(data => { console.log(data) })
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
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    id="user_surname"
                                    label="Surname"
                                    value={this.state.surname}
                                    onChange={this.handleChange('surname')}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>

                        <br />

                        <Button name="Save" variant="contained" color="primary" onClick={this.save}>
                            Save
                        </Button>

                    </CardContent>
                </Card>

            </div >
        );
    }

}