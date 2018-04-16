import React, { Component } from 'react';

class NavBar extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0,
            isReady : false,
            clicked: false
        }
    }

    componentWillReceiveProps(){
        this.setState({
            // if (clicked = true) {
            // counter: 0    
            // }

                counter : this.state.counter + 1            
        })
    }
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li className="brand"><a href="/">DC Comics Shuffle Game</a>
                        </li><li className="">Click an image to begin!</li>
                        <li>Score: {this.state.counter} | Top Score: {this.state.counter}</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;