import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li className="brand"><a href="/">Clicky Game</a>
                        </li><li className="">Click an image to begin!</li>
                        <li>Score: 0 | Top Score: 0</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;