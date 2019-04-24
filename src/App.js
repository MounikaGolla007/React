import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  currentPlayer = 'X'
  
  state = {
    cell0: '',
    cell1: '',
    cell2: '',
    cell3: '',
    cell4: '',
    cell5: '',
    cell6: '',
    cell7: '',
    cell8: '',
  }

  placeMark = (cell) => {
    this.setState({
      [cell]:this.currentPlayer
    });
    if(this.currentPlayer === 'X'){
      this.currentPlayer = 'O';
    }    
    else{
      this.currentPlayer = 'X';
    }
  }

  clearBoard = () => {
    const obj = {};
    for(let j = 0;j<9;j++ ){
      obj[`cell${j}`] = '';
    }
    this.setState(obj);
  }
  
  render = () => {
    return (
      <main>
        <div id="board">
          <div className="cell" onClick={(() => this.placeMark('cell0'))}>{this.state.cell0}</div>
          <div className="cell" onClick={(() => this.placeMark('cell1'))}>{this.state.cell1}</div>
          <div className="cell" onClick={(() => this.placeMark('cell2'))}>{this.state.cell2}</div>
          <div className="cell" onClick={(() => this.placeMark('cell3'))}>{this.state.cell3}</div>
          <div className="cell" onClick={(() => this.placeMark('cell4'))}>{this.state.cell4}</div>
          <div className="cell" onClick={(() => this.placeMark('cell5'))}>{this.state.cell5}</div>
          <div className="cell" onClick={(() => this.placeMark('cell6'))}>{this.state.cell6}</div>
          <div className="cell" onClick={(() => this.placeMark('cell7'))}>{this.state.cell7}</div>
          <div className="cell" onClick={(() => this.placeMark('cell8'))}>{this.state.cell8}</div>
        </div>
        <button id="clear" onClick={(() =>this.clearBoard())}>Clear Board</button>
      </main>
    );
  }
}

export default App;
