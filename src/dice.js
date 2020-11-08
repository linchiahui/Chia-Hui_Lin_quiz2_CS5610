import React from "react";
import "./dice.css";

class Dice extends React.Component {
  constructor(props) {
    super();
  }

  onClick = (event) => {
    this.props.clickedFunc();
  };

  render() {
    return (
      <div className="single_box" onClick={this.onClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Dice;
