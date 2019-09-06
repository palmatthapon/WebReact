import React, {Component} from 'react';

class Score extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <tr>
              <td>{this.props.number}</td>
              <td>{this.props.name}</td>
              <td>{this.props.score}</td>
      </tr>
    )
  }
}
export default Score