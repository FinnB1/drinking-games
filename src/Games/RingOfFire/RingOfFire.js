import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import '../../App.css';
import cards from './Cards'
import PlayingCard from "../../media/playingcard.png";
import Home from "../../Home";
import Back from "../../media/back.png";


export default class RingOfFire extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            card: PlayingCard,
            description: 'Draw a card to start the game',
            total: 52,
            button: <Button className="mx-1" onClick={() => {this.drawCard()}}>Draw</Button>,
        }
    }



    resetGame() {
        var i
        for (i = 0; i < Object.keys(cards).length; i++) {
            cards[Object.keys(cards)[i]].number = 4;
        }
        this.setState({
            card: PlayingCard,
            description: 'Draw a card to start the game',
            total: 52,
            button: <Button className="mx-1" onClick={() => {this.drawCard()}}>Draw</Button>,
        });
    }

    checkWin() {
        if ((cards)[Object.keys(cards)[12]].number === 0) {

            setTimeout(function(){
                alert("GAME OVER");
            }, 500);
            this.setState({button: <Button onClick={() => {this.resetGame()}} variant="success" className="mx-1">Reset</Button>})

        }
    }

    drawCard() {
        let cardNumber;
        do {
            cardNumber = Math.floor(Math.random() * (Object.keys(cards).length));
        }
        while ((cards)[Object.keys(cards)[cardNumber]].number === 0);
        var card = (cards)[Object.keys(cards)[cardNumber]];
        card.number = card.number - 1;
        console.log()
        this.setState({
            card: card.images[card.number + 1],
            total: this.state.total -1,
            description: card.description
        }, () => this.checkWin());

    }

    render() {
        var handler = this.props.handler;
        var appHandler = this.props.parentHandler;

        return (
            <Container>
                <Card  bg="light" text="dark">
                    <Card.Body>
                        <Card.Title>
                            <Card.Text>{this.state.total} cards remaining...</Card.Text>
                            <img className="Playing-card" src={this.state.card} />
                            <Card.Text className="Card-description pt-2">{this.state.description}</Card.Text>
                        </Card.Title>
                        <Card.Body>
                            {this.state.button}
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
