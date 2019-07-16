import React from "react";
import { Button } from "reactstrap";

class CalScreen extends React.Component {
  render() {
    return (
      <div className="screen px-1 py-1">
        <p className="text-right">{this.props.formula}</p>
        <h4 id="display" className="text-right">
          {this.props.currentInputNumber}
        </h4>
      </div>
    );
  }
}
export default CalScreen;
