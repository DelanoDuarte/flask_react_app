import React, { Component } from 'react'
import { Chart } from 'chart.js'

export class ChartComponent extends Component {

    constructor(props) {
        super(props)
        this.chartRef = React.createRef()
    }

    createChart() {
        let ctx = document.getElementById(this.chartRef).getContext("2d");
        let data = {
            datasets: [{
                data: this.props.data,
                backgroundColor: this.generateRandomColors()
            }],
            labels: this.props.labels
        }
        let new_chart = new Chart(ctx, {
            type: this.props.type,
            data: data
        })
    }

    generateRandomColors() {
        const colors = [];
        for (let index = 0; index < this.props.data.length; index++) {
            let randomColor1 = Math.floor((Math.random() * 255) + 1);
            let randomColor2 = Math.floor((Math.random() * 255) + 1);
            let randomColor3 = Math.floor((Math.random() * 255) + 1);
            let randomColor4 = Math.random() * (1 - 0.1) + 0.1;
            let color = `rgba(${randomColor1.toString()},${randomColor2.toString()},${randomColor3.toString()},${randomColor4.toString()})`;
            colors.push(color);
            color = null;
        }
        return colors;
    }

    componentDidMount() {
        this.createChart()
    }

    render() {
        return (
            <div>
                <canvas id={this.chartRef} width="150" height="150"></canvas>
            </div>
        )
    }

}