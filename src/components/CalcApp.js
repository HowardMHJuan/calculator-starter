import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      result: '',
      operator: '',
      resultDisplay: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  resetState() {
    this.setState({
      input: '0',
      result: '',
      operator: '',
      resultDisplay: 0,
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }
  handleClick(inputOne) {
    let input, result, operator;
    if ('0' <= inputOne && inputOne <= '9') {
      if (this.state.resultDisplay === 1 || this.state.input === '0') {
        input = inputOne;
      } else {
        input = this.state.input + inputOne;
      }
      this.setState({input, resultDisplay: 0});
    } else {
      const lastResult = this.state.result, lastInput = parseFloat(this.state.input), lastOperator = this.state.operator;
      if(lastOperator === '') {
        result = lastInput;
      } else {
        if(this.state.resultDisplay === 0 || inputOne === '=') {
          switch(lastOperator) {
            case '+': {
              result = lastResult + lastInput;
              break;
            }
            case '-': {
              result = lastResult - lastInput;
              break;
            }
            case 'x': {
              result = lastResult * lastInput;
              break;
            }
            case '÷': {
              result = lastResult / lastInput;
              break;
            }
          }
        } else {
          result = lastResult;
        }
      }
      if(inputOne !== '=') operator = inputOne;
      else operator = lastOperator;
      this.setState({
        result,
        operator,
        resultDisplay: 1,
      });
    }
  }
  render() {
    let display = this.state.input;
    if(this.state.resultDisplay === 1) {
      display = this.state.result;
    }
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.handleClick}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.handleClick}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.handleClick}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.handleClick}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.handleClick}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.handleClick}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.handleClick}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={this.handleClick}>0</CalcButton>
            <CalcButton className="calc-number" onClick={this.handleClick}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.handleClick}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
