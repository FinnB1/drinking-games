import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../../App.css';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";


export default class RandomGen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            limit: 0,
            screen: <StartScreen handler={this.handler} />,
        };
        this.handler = this.handler.bind(this);
    }

    handler = (arg) => {
        this.setState({
            limit: arg,
            screen: <GameScreen limit = {arg}/>,
        });
    }


    render() {

        return (
            <Container>
                <Card  bg="light" text="dark">
                    <Card.Title className="RNG-title py-2">
                        Random Number Generator
                    </Card.Title>

                    { this.state.screen }

                </Card>
            </Container>
        )
    }


}
