import React, { Component } from 'react';

class Header extends Component {
    render() {
        const array = [30000,2];
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Bootstrap Tutorial</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing {array[0]}
                        responsive, mobile-first projects on the web.</p>
                </div>
                <p>  Now there is a name "Khamel"              </p>
                <p>This is another text.</p>
            </div>
        )
    }
}

export default Header;