import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './home/Home'

export class AppRoutes extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                {/*<Route path="/usuarios" component={UsuarioList} />
                    <Route path="/usuario/novo" component={NovoUsuarioComponent} />

                    <Route path="/processos" component={ProcessoList} />
                    <Route path="/processo/novo" component={NovoProcesso} /> */}
            </div>
        )
    }

}