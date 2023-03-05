import React, {Component} from 'react';
//import questions from './questions2.json'
import questions from './generalTriviaSet1.json';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import './scss/_variables.css';
import TriviaGame from "./TriviaGame";
import ReactDOM from "react-dom";
class StartScreen extends Component{

    constructor(props) {
        super(props);
        this.state=({
            player1: "player 1",
            player2: "player 2"
        });
    }


    handleOnClick = (event) =>{
        ReactDOM.render(
            <TriviaGame />,
            document.getElementById('root'));
    }

    handleChange = ({target}) =>{
        this.setState({
            [target.name]: target.value
        });
    }

    handleOnSubmit = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }


    render(){

        return(

            <>
                <form onSubmit={this.handleOnSubmit}>

                    <input type="text" name="player1" value={this.state.player1} placeHolder="player one name: "
                        onChange={this.handleChange}/>
                    <input type="text" name="player2" value={this.state.player2} placeHolder="player two name: "
                           onChange={this.handleChange}/>

                </form>

                <Button variant="info" onClick={this.handleOnClick}>Start Game</Button>


                </>




        )
    }
}

export default StartScreen;
