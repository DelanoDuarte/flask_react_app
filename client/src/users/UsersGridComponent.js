import React, { Component } from "react";
import { Card, CardContent, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'

export class UsersGridComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Name
                        </TableCell>
                                    <TableCell>
                                        Surname
                        </TableCell>
                                    <TableCell>
                                        Email
                        </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.props.users.map(u => {
                                    return (
                                        <TableRow key={u.id}>
                                            <TableCell component="th" scope="row">
                                                {u.name}
                                            </TableCell>
                                            <TableCell>
                                                {u.surname}
                                            </TableCell>
                                            <TableCell>
                                                {u.email}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        )
    }
}