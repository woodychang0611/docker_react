import React from 'react';
import "./HopefieldNetwork.css"

function NodeBlock(index, value, config) {
    let w = config.width
    let x = index % w
    let y = Math.floor(index / w)
    let fillColor = (value == 0) ? 'black' : 'white'
    return <rect x={x} y={y} width="1" height="1" fill={fillColor} />
}


class HopefieldNetworkBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dummy: "dummy"
        }
    }

    render() {

        var config = {
            width: 10,
            height: 10
        }

        var data = [];
        for (var i = 0; i < config.width * config.height; i++) {
            data.push(Math.round(Math.random()))
        }

        return (
            <svg className='HopefieldNetworkBlock' viewBox={`0 0 ${config.width} ${config.height}`}
                preserveAspectRatio="xMidYMid meet">
                <rect x="0" y="0" width={config.width} height={config.height} fill='darkblue' />
                {data.map((v, i) => NodeBlock(i, v, config))}
            </svg>
        )
    }
}

export default HopefieldNetworkBlock;