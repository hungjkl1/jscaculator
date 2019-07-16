import React from "react";

let CalButton = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <button
            onClick={props.handleClear}
            className="btn btn-danger btn-block"
            id="clear"
          >
            AC
          </button>
        </div>

        <div className="col-3">
          <button
            onClick={props.handleOperator.bind(this)}
            value="+"
            id="add"
            className="btn btn-default btn-block"
          >
            +
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="7"
            id="seven"
            className="btn btn-default btn-block"
          >
            7
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="8"
            id="eight"
            className="btn btn-default btn-block"
          >
            8
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="9"
            id="nine"
            className="btn btn-default btn-block"
          >
            9
          </button>
        </div>
        <div className="col-3">
          <button
            id="subtract"
            onClick={props.handleOperator.bind(this)}
            value="-"
            className="btn btn-default btn-block"
          >
            -
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="4"
            id="four"
            className="btn btn-default btn-block"
          >
            4
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="5"
            id="five"
            className="btn btn-default btn-block"
          >
            5
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="6"
            id="six"
            className="btn btn-default btn-block"
          >
            6
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleOperator.bind(this)}
            value="*"
            id="multiply"
            className="btn btn-default btn-block"
          >
            *
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="1"
            id="one"
            className="btn btn-default btn-block"
          >
            1
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="2"
            id="two"
            className="btn btn-default btn-block"
          >
            2
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="3"
            id="three"
            className="btn btn-default btn-block"
          >
            3
          </button>
        </div>
        <div className="col-3">
          <button
            onClick={props.handleOperator.bind(this)}
            value="/"
            id="divide"
            className="btn btn-default btn-block"
          >
            /
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6">
          <button
            onClick={props.handleInputNumber.bind(this)}
            value="0"
            id="zero"
            className="btn btn-default btn-block"
          >
            0
          </button>
        </div>
        <div className="col-3">
          <button id="decimal" className="btn btn-default btn-block">
            .
          </button>
        </div>
        <div className="col-3">
          <button
            id="equals"
            onClick={props.handleEval.bind(this)}
            className="btn btn-primary btn-block"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default CalButton;
