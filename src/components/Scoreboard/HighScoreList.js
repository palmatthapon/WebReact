import React, {Component} from 'react';
import Score from './Score';
import _ from 'lodash';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux'
import { addMinScoreboard } from '../../actions/score'
import { bindActionCreators } from 'redux';

class HighScoreList extends Component {
  constructor(props){
    super(props);
    this.state  = {
      person: []
    }
    let app = this.props.db.database().ref('highscore');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  getData(values){
    let personVal = values;
    let personLoad = _(personVal)
                    .keys()
                    .map(personKey => {
                      let cloned = _.clone(personVal[personKey]);
                      cloned.key = personKey;
                      return cloned;
                    }).value();
    const personSort = [].concat(personLoad).sort((a, b) => b.score - a.score)
    if(personSort.length>0){
      console.warn("last",personSort[personSort.length-1]);
      this.props.addMinScoreboard(personSort[personSort.length-1].score)
    }
    this.setState({person: personSort});

  }
  onDelete(key){
    let dbCon = this.props.db.database().ref('/highscore');
    dbCon.child(key).remove();
  }
  
  render(){
    let  count =1;
    let personNodes = this.state.person.map((person) =>
          <Score number = {count++}  name = {person.name} score ={person.score}>
            {count>11?this.onDelete(person.key):null}
          </Score>
      );
      return (
        <div>
            <p className="" style={{ marginTop: '25px' }}>
                HighScores
            </p>
            <Table responsive>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {personNodes}
                </tbody>
            </Table>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  addMinScoreboard: bindActionCreators(addMinScoreboard, dispatch)
})

export default connect(null,mapDispatchToProps)(HighScoreList)