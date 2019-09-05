import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import {Table} from 'react-bootstrap';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state  = {
      person: []
    }
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                    .keys()
                    .map(messageKey => {
                      let cloned = _.clone(messagesVal[messageKey]);
                      cloned.key = messageKey;
                      return cloned;
                    }).value();
    this.setState({
      person: messages
    });
  }
  render(){
    const { onAddScore } = this.props
    let  count =1;
    const  personSort = [].concat(this.state.person).sort((a, b) => b.score - a.score)
    //this.props.personActions.addPerson(personSort);
    const  personNodes = personSort.map((person) =>
            <tr>
              <td>{count++}</td>
              <td>{person.message}<button onClick={onAddScore}>add</button></td>
              <td>{person.score}<Message  msgKey={person.key} msg = {person.message} db={this.props.db}></Message></td>
            </tr>
      );
    
      return (
        <div>
            <p className="">
                High score
            </p>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
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

export default MessageList