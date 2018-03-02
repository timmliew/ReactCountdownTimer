import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  fontSize: "11px"
};

const style2 = {
  fontSize: "25px",
  margin: "5px"
};

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "May 1, 2018",
      newDate: ""
    };
    this.newDate = this.newDate.bind(this);
  }

  newDate() {
    this.setState({
      date: this.state.newDate
    });
  }

  render() {
    return (
      <Form inline style={styles}>
        <FormControl
          style={style2}
          placeholder="New date"
          onChange={e => this.setState({ newDate: e.target.value })}
        />
        <Button onClick={this.newDate}>Submit</Button>
        <Clock date={this.state.date} />
      </Form>
    );
  }
}

ReactDOM.render(<Countdown />, document.getElementById("root"));
