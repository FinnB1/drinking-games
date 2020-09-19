import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../App.css';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


export default class RandomGen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            limit: 0,
            screen: this.startScreen,
        };
    }

    startScreen = (
            <Card.Body>
                <DropdownButton id="dropdown-basic-button" title="Select a limit">
                    <Dropdown.Item onClick={() => {this.setLimit(100)}}>100</Dropdown.Item>
                    <Dropdown.Item onClick={() => {this.setLimit(1000)}}>1000</Dropdown.Item>
                    <Dropdown.Item onClick={() => {this.setLimit(10000)}}>10,000</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
    );

    gameScreen = (

            <Card.Body>
                <Card.Title>
                    top uck
                </Card.Title>
            </Card.Body>

    );

    setLimit(limit) {
        console.log("TEST");
        this.setState({
            limit: limit,
            screen: this.gameScreen,
        });
    }

    render() {


        return (
            <Container>
                <Card  bg="light" text="dark">
                    <Card.Title>
                        Random Number Generator
                    </Card.Title>

                    { this.state.screen }

                </Card>
            </Container>
        )
    }


}
