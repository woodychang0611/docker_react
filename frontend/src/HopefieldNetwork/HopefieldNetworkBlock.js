import React from 'react';
import "./HopefieldNetwork.css"

function NodeBlock(index, value, config, click) {
    let w = config.width
    let x = index % w
    let y = Math.floor(index / w)
    let fillColor = (value == 0) ? 'black' : 'white'
    return <rect key={index} x={x} y={y} width="1" height="1" fill={fillColor}
        onClick={
            () => {
                click(x, y)
            }
        }
    />
}


class HopefieldNetworkBlock extends React.Component {
    constructor(props) {
        super(props)

        var config = {
            width: 5,
            height: 5
        };

        var data = [];
        for (var i = 0; i < config.width * config.height; i++) {
            data.push(Math.round(Math.random()))
        }
        this.state = {
            data: data,
            config: config,
            message: "message"
        }



    }


    render() {
        var onClick = (x, y) => {
            let w = this.state.config.width

            let data = this.state.data
            data[w * y + x] = data[w * y + x] ? 0 : 1
            this.setState({
                message: `(${x},${y})`,
                data: data
            });
        }

        return (
            <div className='HopefieldNetworkBlock' >
                <svg viewBox={`0 0 ${this.state.config.width} ${this.state.config.height}`}
                    preserveAspectRatio="xMidYMid meet">
                    <rect x="0" y="0" width={this.state.config.width} height={this.state.config.height} fill='darkblue' />
                    {this.state.data.map((v, i) => NodeBlock(i, v, this.state.config, onClick))}
                </svg>
                <h6>{this.state.message}</h6>
            </div>
        )
    }
}

export default HopefieldNetworkBlock;