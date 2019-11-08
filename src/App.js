import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      mines: 10,
      started: false,

    })
  }

  render(){
    
    
    return (
      <div className="App">
        <div>howdy</div>
      </div>
      );
    }
  }
    
    export default App;
    