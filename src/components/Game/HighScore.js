import React from 'react';
import './HighScore.css';
import {Table,Form,Button, Col, Row,Container} from 'react-bootstrap';
import myJson from './highScoreDB.json';

class HighScore extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            highScoreList: []
        };
      }

    componentDidMount() {
        let list = myJson.person.map((list, key) => {
          return (
            <tr>
                <td>{list.number}</td>
                <td>{list.name}{list.name="Kevin"}</td>
                <td>{list.score}</td>
            </tr>
          )
        })
        this.setState({highScoreList: list});
      }

      saveJson = () => {
        const validJson = this.validateJson(this.state.highScoreList)
        
        if (!validJson) return;
        
        window.localStorage.setItem(
            './db.json',
            validJson
        )
      }

render(){
    return(
        <div className="HighScore">
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={5}>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Your score: 10</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" />
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
    {this.state.highScoreList}
  </tbody>
</Table>
        </div>
    )
}
}
export default HighScore