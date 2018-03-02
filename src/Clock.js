import React from 'react';

const inlign = {
  display: "inline-block",
  margin: "10px"
};

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
    }
    this.updateTillDeadline = this.updateTillDeadline.bind(this)
    this.leadingZero = this.leadingZero.bind(this)
  }

  componentWillMount() {
    this.updateTillDeadline(this.props.date)
  }

  componentDidMount(){
    setInterval(() => this.updateTillDeadline(this.props.date), 1000)
  }

  leadingZero(value){
    return value < 10 ? '0' + value : value;
  }

  updateTillDeadline(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date())

    const secs = Math.floor((time/1000)%60)
    const mins = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    
    this.setState({days,hours,mins,secs})
  }

  render(){
    let arr = {
      "Days": this.state.days, "Hours": this.state.hours, 
      "Mins": this.state.mins, "Secs" : this.state.secs }
    
    return(
      <div>
        <h1>Countdown to {this.props.date} </h1>
        {Object.keys(arr).map((key) => (<h2 style={inlign}>{this.leadingZero(arr[key])} {key}</h2>))}
      </div>
    )
  }
}

export default Clock