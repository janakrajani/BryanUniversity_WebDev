import React, { Component } from "react";
import Checkboxes from "./Checkboxes";
// import "./../App.css";
const numbers = ["1", "2", "3", "4"];
const colors = ["#ffffff", "#F7E3B3", "#71EB92", "#000fff"];
const classes = ["input1", "input2", "input3", "input4"];
class HeaderButtons extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <header className={this.props.headerClass}>
        {numbers.map((nums, col) => {
          //   const keys = numbers[nums];
          //   console.log(keys);
          return (
            <Checkboxes
              className="ColorInput"
              sp1={nums}
              key={nums}
              type="color"
              value={colors[col]}
              class={classes[col]}
              //   value="red"
            />
          );
        })}
        {/* one parethesis for return.. one curly for the funct... another parenthesis for map... and the blue curly THEN closing header */}
      </header>
    );
  }
}
export default HeaderButtons;