import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Header from './components/Header';
import Footer from './components/Footer';
import Character from './components/Character';
import NavBar from './components/NavBar';

  // import shuffle from '../utils'
  //shuffle array function:  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle (oldArray) {
  let array = oldArray.slice() // let array = [...oldArray]
  for (let i = array.length - 1; i > 0; i--) {
      const temparray = Math.floor(Math.random() * (i + 1));
      [array[i], array[temparray]] = [array[temparray], array[i]];
  }
  return array;
}

class App extends Component {

    // Setting this.state.characters to the characters json array
    state = {
      characters: characters,
      // score: 0,
      clicked: characters.clicked
    };
    
    handleClick2 = (id) => {
      this.setState((state) => ({
        clicked: true,
      }))
      console.log(characters.clicked)
    }
    handleClick = (id) => {
      this.setState((state) => ({
        characters: shuffle(state.characters),
      }))
    }
      // this.setState((score) => ({

      // }))
    

  render() {
    
    return (
      <div className="App">
        <NavBar />
        <Header />
        <main className="container">
        {this.state.characters.map(characters => (
          <Character
            onClick={this.handleClick}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            clicked={characters.clicked}
          />
        ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
