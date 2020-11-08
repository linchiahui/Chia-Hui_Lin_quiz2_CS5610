import React from "react";
import Dice from "./dice";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { score: 0, dice_array: [] };
  }

  addDice = () => {
    var dice_array = this.state.dice_array.slice();
    dice_array.push(0);
    // console.log(dice_array);
    this.setState({ dice_array });
  };

  removeDice = () => {
    var dice_array = this.state.dice_array.slice();
    var score = this.state.score;
    if (dice_array.length === 0) {
      return;
    }
    var remove_value = dice_array.pop();
    score -= remove_value;
    // console.log(dice_array);
    this.setState({ score, dice_array });
  };

  rollDices() {
    var dice_array = this.state.dice_array.slice();
    var score = 0;
    for (var i = 0; i < dice_array.length; i++) {
      var dice_val = Math.floor(Math.random() * 6) + 1;
      dice_array[i] = dice_val;
      score += dice_val;
    }
    // console.log(dice_array);
    this.setState({ score, dice_array });
  }

  render() {
    return (
      <div className="container">
        <div className="count">
          <h1>Dice Roller</h1>
        </div>
        <div className="button-group">
          <button type="button" onClick={this.addDice}>
            add
          </button>
          <button type="button" onClick={this.removeDice}>
            remove
          </button>
        </div>
        <br></br>
        <div className="dice_area">
          {this.state.dice_array.map((dice, index) => (
            <Dice
              key={index}
              value={dice}
              clickedFunc={() => this.rollDices()}
            />
          ))}
        </div>
        <h3 className="score">Sum: {this.state.score}</h3>
      </div>
    );
  }
}

export default App;
