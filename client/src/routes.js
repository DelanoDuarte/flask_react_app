import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Home } from './home/Home'
import { UserList } from './users/UserList';
import { NewUser } from './users/NewUser'

export class AppRoutes extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/users/new" component={NewUser} />

                {/*<Route path="/processos" component={ProcessoList} />
                    <Route path="/processo/novo" component={NovoProcesso} /> */}
            </div>
        )
    }

}