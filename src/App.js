import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Header from './components/Header';
import Footer from './components/Footer';
import Character from './components/Character';
import NavBar from './components/NavBar';

class App extends Component {

    // Setting this.state.characters to the characters json array
    state = {
      characters
    };
  
    removeCharacter = id => {
      // Filter this.state.characters for characters with an id not equal to the id being removed
      const characters = this.state.characters.filter(character => character.id !== id);
      // Set this.state.characters equal to the new characters array
      this.setState({ characters });
    };

  render() {
    // const indexes = math.random array.length
    return (
      <div className="App">
        <NavBar />
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.characters.map(characters => (
          <Character
            removeCharacters={this.removecharacters}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
