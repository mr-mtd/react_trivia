import React, {Component} from 'react'
import questions from './questions.json'
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
            answera: questions[0].choices.a,
            answerb: questions[0].choices.b,
            answerc: questions[0].choices.c,
            answerd: questions[0].choices.d,
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
                    answerResponse: "WRONG!",
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
            answera: questions[j].choices.a,
            answerb: questions[j].choices.b,
            answerc: questions[j].choices.c,
            answerd: questions[j].choices.d,
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
            <Container fluid="md" >
                <Row md="true" fluid="md">
                    <Col><h2>{this.state.question}</h2> <br /> </Col> 
                </Row>
                <Row sm="true" fluid="sm">
                    <Col><h3 align="middle">{this.state.answerResponse} </h3> <br /> </Col>
                </Row>
                <Row sm="true" fluid="sm" >
                    <Col> <h2 align="middle">Score:  {this.state.score} </h2> <br /> </Col>
                </Row>
            </Container>


            
                    {/* <div class="container-fluid">{this.state.question}</div>
                    <div class="Container-fluid">{this.state.answerResponse}</div>
                    <div class="Container-fluid">Score:  {this.state.score}</div>
            */}
                <table cellPadding="30" align="center">
                <tbody>
                    <tr>
                    <td><p>
                        <Button variant="info"  value={questions[i].choices.a} onClick={this.handleOnClick}>
                            {questions[i].choices.a}   </Button>{''}  </p> </td>
                    <td><p>
                        <Button variant="info" value={questions[i].choices.b} onClick={this.handleOnClick}>
                            {questions[i].choices.b}</Button> </p> </td>
                    </tr>
                    <tr>
                        <td><p>
                            <Button variant="info" value={questions[i].choices.c} onClick={this.handleOnClick}>
                                {questions[i].choices.c}</Button></p></td>
                        <td><p>
                            <Button variant="info" value={questions[i].choices.d} onClick={this.handleOnClick}>
                                {questions[i].choices.d}</Button></p></td>
                    </tr>
                </tbody>
                </table>
            </> 
        )}
}


export default TriviaGame;