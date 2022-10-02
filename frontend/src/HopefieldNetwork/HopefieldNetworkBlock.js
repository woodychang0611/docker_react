import React from 'react';
import "./HopefieldNetwork.css"
class HopefieldNetworkBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nodeValues: [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
        }
    }

    render() {
        return (
            <div width="640" height="640">
                <svg
                    style={{
                        width: "320", height: "320"
                    }}
                >
                    <rect width="100%" height="100%" className="HopefieldNetworkBlock" />
                    <rect x="25%" y="25%" width="50%" height="50%" />
                </svg>
                <svg
                    style={{
                        width: "320", height: "320"
                    }}
                >
                    <rect width="100%" height="100%" className="HopefieldNetworkBlock" />
                    <rect width="50%" height="50%" />
                </svg>
            </div>


        )
    }
}

export default HopefieldNetworkBlock;