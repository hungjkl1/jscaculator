/* eslint no-eval: 0 */
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import CalButton from "./components/CalButton";
import CalScreen from "./components/CalScreen";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInputNumber: "",
      formula: "",
      newFormula: false
    };
  }
  handleInputNumber = e => {
    if (!(this.state.currentInputNumber === "" && e.target.value === "0")) {
      if (this.state.currentInputNumber.length < 15) {
        if (/[-+*/]/.test(this.state.currentInputNumber) === true) {
          this.setState({
            formula: this.state.formula + this.state.currentInputNumber,
            currentInputNumber: "" + e.target.value
          });
        } else
          this.setState({
            currentInputNumber: this.state.currentInputNumber + e.target.value
          });
      }
    }
  };
  handleOperator = e => {
    if (/[-+*/]/.test(this.state.currentInputNumber) === false) {
      this.setState({
        formula: this.state.formula + this.state.currentInputNumber,
        currentInputNumber: e.target.value
      });
    }
  };
  handleClear = () => {
    this.setState({
      currentInputNumber: "",
      formula: ""
    });
  };
  handleEval = () => {
    this.setState(
      {
        formula: this.state.formula + this.state.currentInputNumber,
        currentInputNumber: ""
      },
      () => {
        const result = eval(this.state.formula);
        this.setState({
          formula: "",
          currentInputNumber: result
        });
      }
    );
  };
  render() {
    return (
      <div className="App">
        <div className="container mx-auto">
          <div className="calbody">
            <div className="mt-5">
              <h6 className="py-2">JavaScript Caculator</h6>
              <div className="mt-2 mb-4">
                <CalScreen
                  formula={this.state.formula}
                  currentInputNumber={this.state.currentInputNumber}
                />
              </div>
              <div className="">
                <CalButton
                  handleClear={this.handleClear}
                  handleEval={this.handleEval}
                  handleOperator={this.handleOperator}
                  handleInputNumber={this.handleInputNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
