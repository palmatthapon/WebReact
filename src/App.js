import React from 'react';
import './App.css';
import GameRabbitAndBear from './components/Game/GameRabbitAndBear';
import ScoreboardList from './components/Scoreboard/ScoreboardList';
import ScoreboardBox from './components/Scoreboard/ScoreboardBox';
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
          { this.props.score>this.props.minScoreboard ? <ScoreboardBox db={firebase}></ScoreboardBox> : null }
          <div>
            <ScoreboardList db={firebase} ></ScoreboardList>
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
