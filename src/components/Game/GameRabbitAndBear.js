import React from 'react';
import {Row, Col, Button,Container} from 'react-bootstrap';
import { addScore } from '../../actions/score'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class GameRabbitAndBear extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          score: 0,
          gameTimer:1,
          time: {}, seconds: 30,
        };
        this.rabbitSlot =0;
        this.tableRan = 0;
        this.tableSlot =0;
        this.bearSlot =0;
        this.tableImage = ['/table.png','/fish-drop.gif','/fish-drop1.gif','/carrot-drop.gif','/carrot-drop1.gif'];
        this.rabbitImage = ['/rabbit.png','/rabbit-eat.png','/rabbit-eat1.png'];
        this.bearImage = ['/bear.png','/bear-eat.png','/bear-eat1.png'];
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.StartButton = 'Start';
      }

      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
    
      startTimer() {
        console.log('start');
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
          this.StartButton = 'Restart';
        }else{
          this.StartButton = 'Start';
          this.setState({ score: 0,seconds:30 ,gameTimer:1});
          this.timer = 0;
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        let gameTimer = this.state.gameTimer - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,gameTimer: gameTimer
        });

        if(gameTimer ===0){
          this.NextRound();
        }
        
        // Check if we're at zero.
        if (seconds === 0) { 
          clearInterval(this.timer);
          //alert('Your high score:'+this.state.score);
          this.props.addScore(this.state.score);
        }
      }

      NextRound(){
        this.RandomImage();
        let gameTimer = 5;
          this.setState({
            gameTimer: gameTimer,
          });
      }

      RabbitClick=()=>{
        if(this.state.seconds === 0)
          return;
        if(this.tableRan ===1)
          this.rabbitSlot = 1;
        else
          this.rabbitSlot = 2;
        this.bearSlot =0;
        let score = this.state.score+(this.tableRan===1?1:-1);
        this.setState({ score: score})
        this.NextRound();
      } 
      BearClick=()=>{
        if(this.state.seconds === 0)
          return;
        if(this.tableRan ===0)
          this.bearSlot = 1;
        else
          this.bearSlot = 2;
        this.rabbitSlot = 0;
        let score = this.state.score+(this.tableRan ===0?1:-1);
        this.setState({ score: score})
        this.NextRound();
      }

      RandomImage(){
        const min = 1;
        const max = 10;
        var ran =min + (Math.floor(Math.random() * (max - min)));
        ran = ran%2===0?0:1;
        this.tableRan = ran;
        if(ran === 0){
          if(this.tableSlot===1){
            this.tableSlot =2;
          }else{
            this.tableSlot =1;
          }
        }else{
          if(this.tableSlot===3){
            this.tableSlot =4;
          }else{
            this.tableSlot =3;
          }
        }
      }
      
	render() {
        return (
            <div>
            <Button variant="warning" onClick={this.startTimer}>{this.StartButton}</Button>
            <h1 id='score'>Score: {this.state.score}</h1>
            <h1 >Time: {this.state.time.s}</h1>
            <h1>{this.state.animationCount}</h1>
            <Container>
              <Row>
                <Col>
                  <img src={process.env.PUBLIC_URL + this.rabbitImage[this.rabbitSlot]} alt="rabbit" width='100%' onClick={this.RabbitClick} />
                  </Col>
                  <Col>
                  <img src={process.env.PUBLIC_URL + this.tableImage[this.tableSlot]} alt="table" width='100%' />
                  </Col>
                  <Col>
                  <img src={process.env.PUBLIC_URL + this.bearImage[this.bearSlot]} alt="bear" width='100%'  onClick={this.BearClick} />
                </Col>
              </Row>
            </Container>
            </div>
            )
	}
}
const mapStateToProps=(state,ownProps)=> {
  return { score: state.scoreReducer.score};
}

const mapDispatchToProps = dispatch => ({
  addScore: bindActionCreators(addScore, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(GameRabbitAndBear)