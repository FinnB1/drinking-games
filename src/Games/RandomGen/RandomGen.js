import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import '../../App.css';
import Back from '../../media/back.png';
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import Home from "../../Home";


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
        var handler = this.props.handler;
        var appHandler = this.props.parentHandler;
        return (
            <Container>
                <Card  bg="light" text="dark">

                    { this.state.screen }

                </Card>
                <button onClick={() => handler(<Home handler={appHandler}/>)} className="Back-button">
                    <img className="Back-button-image my-3" src={Back} />
                </button>
            </Container>
        )
    }


}
