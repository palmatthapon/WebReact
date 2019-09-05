import React, {Component} from 'react';
import trim from 'trim';
import {Form,Button, Col, Row,Container} from 'react-bootstrap';

class MessageBox extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            number:'',
            message: ''
        };
      }
    
      onChange(e){
        this.setState({
          message: e.target.value
        });
      }

      onSubmit(e){
        if(this.state.message !== ''){
          e.preventDefault();
          let dbCon = this.props.db.database().ref('/messages');
          dbCon.push({
            number: 10,
            message: this.state.message
          });
          this.setState({
              number:'',
                message: ''
          });
          alert("submit success");
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
                                <Form.Label>Your score: 10</Form.Label>
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
export default MessageBox