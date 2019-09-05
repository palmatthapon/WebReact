import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import {Table} from 'react-bootstrap';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state  = {
      messages: []
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
      messages: messages
    });
  }
  render(){
    let messageNodes = this.state.messages.map((message) => {
        return (
            <tr>
              <td>{message.number}</td>
              <td>{message.message}</td>
              <td>{message.message}<Message  msgKey={message.key} msg = {message.message} db={this.props.db}></Message></td>
            </tr>
        )
      });
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
                {messageNodes}
                </tbody>
            </Table>
        </div>
      );
  }
}
export default MessageList