import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import '../../App.css';
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

                    { this.state.screen }

                </Card>
            </Container>
        )
    }


}
