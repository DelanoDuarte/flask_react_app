import React, { Component } from "react";
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'

export class UsersGridComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                        </TableCell>
                            <TableCell>
                                Surname
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
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}