import { connect } from "react-redux";
import { addAnswer,
         prevQuestion,
         nextQuestion,
         changeActiveQuestion,
         displayResult,
         restart} from '../redux/actions/questionActions'

 const Display = (props: any) =>{

     const isCompleted = () => {
        let count = 0;
        let result=''
        for(let i=0;i< props.answers.length +1; i++){
            if(props.answers[i]){
                result=result+props.answers[i]+' '
                count++;
            }
        }
        if(count===4){
            result=result.trim()
            result=result+'.'
           props.displayResult(result)
        }
    }

    const answerTheQuestion = (e:any) => {
        e.preventDefault()
        let ansArray = props.answers
        if (e.target.answer.value !== '') {
            ansArray[props.activeQuestion - 1] = e.target.answer.value
            addAnswer(ansArray);
            e.target.answer.value = ''
            props.nextQuestion();
            props.prevQuestion();
            props.nextQuestion();
            isCompleted();
        }

    }
    const clickIndicator = (e:any) => {
        props.changeActiveQuestion(parseInt(e.target.textContent, 10));
    }



    return(
         <div className="display ">
            <div className={props.resultToDisplay !=='' ? 'finished' : ''}>
            <h1>{props.questions[props.activeQuestion - 1]}</h1>
            <div className="input-div">
                <form onSubmit={answerTheQuestion}>
                    <input type="text" name="answer" />
                    <button>Add</button>
                </form>
            </div>
            <div>
                <span onClick={() => { props.prevQuestion() }}>Back</span>
                <span>{props.activeQuestion}</span>
                <span onClick={() => { props.nextQuestion() }}>Next</span>
            </div>
            <div className="indicator">
                <ul>
                    <li className={props.answers[0] ? 'answered' : ''} onClick={clickIndicator}>1</li>
                    <li className={props.answers[1] ? 'answered' : ''} onClick={clickIndicator}>2</li>
                    <li className={props.answers[2] ? 'answered' : ''} onClick={clickIndicator}>3</li>
                    <li className={props.answers[3] ? 'answered' : ''} onClick={clickIndicator}>4</li>
                </ul>
            </div>
            </div>

            <div className={props.resultToDisplay !=='' ? 'displayResult': 'doNotDisplay'}>
             <h3>Yahooo! We got the result!!!</h3>
             <h1>{props.resultToDisplay}</h1>
             <button onClick={()=>{props.restart()}}>Restart</button>
            </div>            
        </div>
    )}
const mapStateToProps = (state:any) => {
    return {
        questions: state.question.questions,
        answers: state.question.answers,
        activeQuestion: state.question.activeQuestionIndex,
        resultToDisplay: state.question.resultToDisplay
    }
}



   
export default connect(mapStateToProps, { changeActiveQuestion,
     prevQuestion, addAnswer, nextQuestion,displayResult,restart })(Display);