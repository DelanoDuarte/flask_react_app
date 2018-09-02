import React, { Component } from 'react'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'

import { ChartComponent } from '../common/components/ChartComponent'

export class Home extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary">
                                    Word of the Day
                                </Typography>
                                <ChartComponent type="pie" data={[10, 30, 54]} labels={["Teste1", "Teste2", "Teste3"]} />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary">
                                    Word of the Day
                                </Typography>
                                <ChartComponent type="pie" data={[32, 54, 48]} labels={["Teste1", "Teste2", "Teste3"]} />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary">
                                    Word of the Day
                                </Typography>
                                <ChartComponent type="pie" data={[6, 47, 85]} labels={["Teste1", "Teste2", "Teste3"]} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }

}