import React from 'react';
import logo from './media/logo.png';
import './App.css';
import Home from './Home.js';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            currentPage: <Home />,
        };
        this.showHome = this.showHome.bind(this);
    }

    showHome() {
        this.setState({currentPage: <Home />});
    }

    render() {
        return (
            <Container fluid className="App">
                <Container className="App-header">
                    <img className="App-logo" onClick={this.showHome} src={logo} />
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
