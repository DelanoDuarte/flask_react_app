import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Home } from './home/Home'
import { UserList } from './users/UserList';

export class AppRoutes extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserList} />
                {/*    <Route path="/usuario/novo" component={NovoUsuarioComponent} />

                    <Route path="/processos" component={ProcessoList} />
                    <Route path="/processo/novo" component={NovoProcesso} /> */}
            </div>
        )
    }

}