import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import '../../App.css';
import Home from "../../Home";
import Back from "../../media/back.png";
import {dares, drinks} from './Dares';



export default class DareOrDrink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dare: 'Do the dare',
            drink: 'Drink as a punishment'
        }
    }


    dare() {
        if (dares.length === 0) {
            alert("You have run out of dares :(");
        }
        else {
            var index = Math.floor(Math.random() * (dares.length));
            var index2 = Math.floor(Math.random() * 6);
            var dare = dares[index];
            var drink = drinks[index2];
            dares.splice(index, 1);
            this.setState({dare: dare, drink: drink})
        }
    }

    render() {
        var handler = this.props.handler;
        var appHandler = this.props.parentHandler;

        return (
            <Container>
                <Card  bg="light" text="dark">
                    <Card.Body>
                        <Card.Body>
                            <Card.Text className="Dare-text">
                                {this.state.dare}
                            </Card.Text>
                            <Card.Text className="Dare-text-bold">
                                or
                            </Card.Text>
                            <Card.Text className="Dare-text">
                                {this.state.drink}
                            </Card.Text>
                            <Button onClick={() => {this.dare()}}>Dare</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
                <button onClick={() => handler(<Home handler={appHandler}/>)} className="Back-button">
                    <img className="Back-button-image my-3" src={Back} />
                </button>
            </Container>
        )
    }


}
