import React from 'react';
import logo from './media/logo.png';
import './App.css';
import Home from './Home.js';
import RandomGen from './Games/RandomGen/RandomGen.js';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            currentPage: <Home handler = {this.handler} />,
            currentLogo: logo,
        };
        this.handler = this.handler.bind(this);
        this.showHome = this.showHome.bind(this);
    }

    handler = (page, logo) => {
        this.setState({
            currentPage: page,
            currentLogo: logo,
        });
    }

    showHome() {
        this.setState({currentPage: <Home handler = {this.handler} />, currentLogo: logo });
    }

    showRandomGen() {
        this.setState({currentPage: <RandomGen handler = {this.handler} />})
    }

    render() {
        return (
            <Container fluid className="App">
                <Container className="App-header">
                    <img className="App-logo" onClick={this.showHome} src={this.state.currentLogo} />
                </Container>
                <Container className="App-body">
                    <Row>
                        <Col>
                            <Container>
                                { this.state.currentPage }
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>

        );
    }
}
