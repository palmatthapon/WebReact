import React from 'react';
import './App.css';
import GameRabbitAndBear from './components/Game/GameRabbitAndBear';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends React.Component {
  constructor(props){
    super(props);
    var firebaseConfig = {
      apiKey: "AIzaSyCW11KXPoRVP531XKovOcrw9yRYbg-gQPk",
      authDomain: "webgamereact.firebaseapp.com",
      databaseURL: "https://webgamereact.firebaseio.com",
      projectId: "webgamereact",
      storageBucket: "",
      messagingSenderId: "826054977737",
      appId: "1:826054977737:web:fbe537a8b5e25ae6"
    };
  firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <GameRabbitAndBear></GameRabbitAndBear>
          </header>
          <div >
            <MessageBox db={firebase}></MessageBox>
          </div>
          <div>
            <MessageList db={firebase}></MessageList>
          </div>
        </div>
      );
    } 
}

export default App;
