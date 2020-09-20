import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import countdownLogo from './media/countdown.png';
import homeLogo from './media/logo.png';
import RandomGen from './Games/RandomGen/RandomGen.js';
import RingOfFire from './Games/RingOfFire/RingOfFire.js';
import RNG from './media/RNG.png';
import ROF from './media/ROF.png';
import COS from './media/COS.png';
import DOD from './media/DOD.png';
import './App.css';
import DareOrDrink from "./Games/DareOrDrink/DareOrDrink";

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this);
    }

    handler = (page) => {
        this.props.handler(page);
    }

    render() {
        var appHandler = this.props.handler;

        return (
            <Container>
                <Row xs={1} sm={1} md={2} lg={4}>
                    <Col className="py-2">
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src={ RNG } />
                            <Card.Body>
                                <Card.Title>Countdown</Card.Title>
                                <Card.Text>
                                    Random number generator where the number generated becomes the new range, land on 1 and you drink.
                                </Card.Text>
                                <Button onClick={() => appHandler(<RandomGen handler={this.handler} parentHandler={appHandler}/>)} variant="primary">Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="py-2">
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src={ ROF } />
                            <Card.Body>
                                <Card.Title>Ring of Fire</Card.Title>
                                <Card.Text>
                                    Game involving a cup and a deck of cards, each one having a different rule.
                                </Card.Text>
                                <Button onClick={() => appHandler(<RingOfFire handler={this.handler} parentHandler={appHandler}/>, homeLogo)} variant="primary">Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="py-2">
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src={ DOD } />
                            <Card.Body>
                                <Card.Title>Dare or Drink</Card.Title>
                                <Card.Text>
                                    Complete the given dare or take the easy way out and do some shots.
                                </Card.Text>
                                <Button onClick={() => appHandler(<DareOrDrink handler={this.handler} parentHandler={appHandler} />, countdownLogo)} variant="primary">Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="py-2">
                        <Card className="Home-card">
                            <Card.Img className="Home-image" variant="top" src={ COS } />
                            <Card.Body>
                                <Card.Title>Coming Soon</Card.Title>
                                <Card.Text>
                                    More games coming soon
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
