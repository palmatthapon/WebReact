import React from 'react';

class GameRabbitAndBear extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          score: 0,
          time: {}, seconds: 5,
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
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }else{
          this.setState({ score: 0,seconds:5 });
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
          //clearInterval(this.timer);
          this.NextRound();
        }
      }

      Continue(){
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }

      NextRound(){
        this.RandomImage();
        let seconds = 5;
          this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
          });
          this.Continue();
      }

      RabbitClick=()=>{
        //alert('Hello!'+this.state.count);
        if(this.timer === 0)
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
        //alert('Hello!'+this.state.count);
        if(this.timer === 0)
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
        //this.setState({random: ran});
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
            <button onClick={this.startTimer}>Start</button>
            <h1 id='score'>Score: {this.state.score} </h1>
            <h1 >Time: m: {this.state.time.m} s: {this.state.time.s}</h1>
            <h1>{this.state.animationCount}</h1>
            <table id='students'>
               <tbody>
               <img src={process.env.PUBLIC_URL + this.rabbitImage[this.rabbitSlot]} alt="rabbit" width={500} mode='fit' onClick={this.RabbitClick} />
               <img src={process.env.PUBLIC_URL + this.tableImage[this.tableSlot]} alt="table" width={500} mode='fit'/>
               <img src={process.env.PUBLIC_URL + this.bearImage[this.bearSlot]} alt="bear" width={500} mode='fit' onClick={this.BearClick} />
               </tbody>
               <tbody>
               </tbody>
            
              
            </table>
            </div>
            )
	}
}

export default GameRabbitAndBear