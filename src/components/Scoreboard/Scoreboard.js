import React, {Component} from 'react';

class Scoreboard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default Scoreboard