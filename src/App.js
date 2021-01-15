//App.js는 화면창에 렌더링하는 내용을 관리하는 파일이다

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="gray-background">
        <img src={logo} alt="logo"/>
        <h2>Let's develop management system!</h2>
      </div>
    );
  }
}

export default App;