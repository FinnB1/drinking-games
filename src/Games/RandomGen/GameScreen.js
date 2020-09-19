import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import CountUp from 'react-countup';
import '../../App.css';

export default class GameScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: this.props.limit,
            roll: this.props.limit,
        }
    }

    roll() {
        var roll = this.state.roll;
        var newLimit = Math.floor(Math.random() * (roll - 1) + 1);
        this.setState({limit: roll, roll: newLimit,})
    }

    render() {
        var limit = this.state.limit;
        var roll = this.state.roll;
        return(
            <Card.Body>
                <Card.Title>
                    <CountUp className="RNG-number" start={limit} end={roll} />
                </Card.Title>
                <Card.Body>
                    <Button onClick={() => this.roll()}>Roll</Button>
                </Card.Body>
            </Card.Body>
        );
    }

}
