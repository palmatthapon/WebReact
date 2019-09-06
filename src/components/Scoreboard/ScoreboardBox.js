import React, {Component} from 'react';
//import trim from 'trim';
import {Form,Button, Col, Row,Container} from 'react-bootstrap';
import { connect } from 'react-redux'
import { clearScore } from '../../actions/score'
import { bindActionCreators } from 'redux';

class ScoreboardBox extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            score: this.props.score
        };
      }
    
      onChange(e){
        this.setState({
          name: e.target.value
        });
      }

      onSubmit(e){
        if(this.state.name !== ''){
          e.preventDefault();
          let dbCon = this.props.db.database().ref('/highscore');
          dbCon.push({
            name: this.state.name,
            score: this.state.score
          });
          this.setState({
            name: '',
            score:0
          });
          alert("submit success");
          this.props.clearScore();
        }
      }


  render() {
    return (
        <div>
    <Container>
        <Row>
            <Col></Col>
            <Col xs={5}>
                  <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Your score: {this.props.score}</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" onChange={this.onChange} value={this.state.message}/>
                                <Form.Text className="text-muted">
                                Your name and score'll show on scoreboard.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.saveJson}>
                                Submit
                            </Button>
                        </Form>
            </Col>
            <Col></Col>
        </Row>
    
    </Container>
        </div>
        
    )
  }
}

const mapStateToProps=(state,ownProps)=> {
  return { score: state.scoreReducer.score,
  person: state.scoreReducer.person};
}

const mapDispatchToProps = dispatch => ({
  clearScore: bindActionCreators(clearScore, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ScoreboardBox)