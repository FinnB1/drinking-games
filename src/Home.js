import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RandomGen from './Games/RandomGen/RandomGen.js';
import './App.css';

export default class Home extends React.Component {

    render() {
        var handler = this.props.handler;

        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src="http://placehold.jp/180x100.png" />
                            <Card.Body>
                                <Card.Title>Random Number</Card.Title>
                                <Card.Text>
                                    Keep rolling until someone gets a 1, they have to down their drink.
                                </Card.Text>
                                <Button onClick={() => handler(<RandomGen />)} variant="primary">Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src="http://placehold.jp/180x100.png" />
                            <Card.Body>
                                <Card.Title>Coming Soon</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary disabled">Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src="http://placehold.jp/180x100.png" />
                            <Card.Body>
                                <Card.Title>Coming Soon</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary disabled">Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }


}
