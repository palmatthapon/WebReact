import React, {Component} from 'react';

class Message extends Component {
  constructor(props){
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete(e){
    e.preventDefault();
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.child(this.props.msgKey).remove();
  }
  render(){
    return (
      <div>
        {this.props.message}
          <button onClick={this.onClickDelete}>
          Delete
        </button>
      </div>
    )
  }
}
export default Message