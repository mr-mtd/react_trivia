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


class TriviaGame extends Component{

    constructor(props){
        super(props)

        this.state= {
            value: '',
            question: questions[0].question,
            submitResponse:'',
            crrectAnwer: '',
            submittedAnswer: '',
            answera: questions[0].a,
            answerb: questions[0].b,
            answerc: questions[0].c,
            answerd: questions[0].d,
            score: 0,
            index: 0
        };
    }

    handleSubmit = (event) => {
         console.log("entered handle submit")
         this.setState({
             value : event.target.value
         })
         event.preventDefault();
    }

    handleOnClick = (event) =>{

        if( this.state.index < questions.length ){
            if(event.target.value === questions[this.state.index].answer){
                console.log('button clicked')
                console.log("target val: " + event.target.value)
                console.log("answer was: " + questions[this.state.index].answer)
                console.log("entered correct answer state set")

                this.setState({
                    answerResponse: "CORRECT!",
                    score: this.state.score+50,
                })
            }else{
                this.setState({
                    answerResponse: "WRONG! Correct answer was " + questions[this.state.index].answer,

                    score: this.state.score-1,            
                })
            } 
        }

         if( this.state.index <= questions.length-1){
                 this.increaseIndexAndQuestions(this.state.index);
         }else{
                this.setState({
                    index:  this.state.index+1,
                    answera: "a",
                    answerb: "b",
                    answerc: "c",
                    answerd: "d",
                    question: "out of questions" 
                })
            } 
        }

    increaseIndexAndQuestions = (j) => {
      
        this.setState({
            index:  this.state.index+1,
            answera: questions[j].a,
            answerb: questions[j].b,
            answerc: questions[j].c,
            answerd: questions[j].d,
            question: questions[j].question
        })
    }

    // handleInputChange = (event) => {
    //     console.log("handle input change called")
    //     this.setState({
    //        value : event.target.value })
    // }

        
    render() {

        var i = this.state.index
        if (i > questions.length-1){
            return(
                <div>
                    <p> Game Over. Your Score Was + {this.state.score}</p>
                </div>
                )
        }

        return(
            <>
            <br></br>
            <br></br>
            <Container fluid="md" >
                <Row md="true" fluid="md">
                    <Col><h2>{questions[i].question}</h2> <br /> </Col> 
                </Row>
                <Row sm="true" fluid="sm">
                    <Col><h3 align="middle">{this.state.answerResponse} </h3> <br /> </Col>
                </Row>
                <Row sm="true" fluid="sm" >
                    <Col> <h2 align="middle">Score:  {this.state.score} </h2> <br /> </Col>
                </Row>
            </Container>


            <div align="middle">
            <Container fluid="true">
                <Row md="true" fluid="true">
                    <Col >
                        <Button variant="info" style={{ height: 75, width: 150, marginTop: 10}} value={questions[i].a} onClick={this.handleOnClick}>
                                {questions[i].a} </Button>{''}
                    </Col>
                    <Col><Button variant="info" style={{ height: 75, width: 150, marginTop: 10}}  value={questions[i].b} onClick={this.handleOnClick}>
                            {questions[i].b}</Button>
                    </Col>
                </Row>
                <Row md="true" fluid="true">
                    <Col><Button variant="info" style={{ height: 75, width: 150, marginTop: 10}} value={questions[i].c} onClick={this.handleOnClick}>
                                {questions[i].c}</Button>
                                </Col>
                    <Col><Button variant="info" style={{ height: 75, width: 150, marginTop: 10}} value={questions[i].d} onClick={this.handleOnClick}>
                                {questions[i].d}</Button>
                                </Col>
                </Row>
            </Container>
            </div>


            </> 
        )}
}


export default TriviaGame;