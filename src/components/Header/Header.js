import React, { Component } from 'react';

class Header extends Component {
    render() {
        const array = [30000, 2];
        return (
            <div className="container">
                <header className="header">
                    <h1>Clicky Game!</h1>
                    <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                </header>
            </div>
        )
    }
}

export default Header;

