import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

export default class StartScreen extends React.Component{

    render() {
        var handler = this.props.handler;
        return (
            <Card.Body>
                <DropdownButton id="dropdown-basic-button" title="Select a limit">
                    <Dropdown.Item onClick={() => handler(100)}>100</Dropdown.Item>
                    <Dropdown.Item onClick={() => handler(1000)}>1000</Dropdown.Item>
                    <Dropdown.Item onClick={() => handler(10000)}>10,000</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
        );
    }

}
