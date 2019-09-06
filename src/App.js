import React from 'react';
import './App.css';
import GameRabbitAndBear from './components/Game/GameRabbitAndBear';
import HighScoreList from './components/Scoreboard/HighScoreList';
import SaveScoreBox from './components/Scoreboard/SaveScoreBox';
import firebase from 'firebase';
import { connect } from 'react-redux';

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
          {console.warn('App props',this.props)}
          { this.props.score>this.props.minScoreboard ? <SaveScoreBox db={firebase}></SaveScoreBox> : null }
          <div>
            <HighScoreList db={firebase} ></HighScoreList>
          </div>
        </div>
      );
    } 
}
const mapStateToProps=(state,ownProps)=> {
  return { score: state.scoreReducer.score,
    minScoreboard: state.scoreReducer.minScoreboard};
}

export default connect(mapStateToProps)(App);
