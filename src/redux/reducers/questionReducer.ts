import { ADD_ANSWER,
         PREVIOUS_QUESTION,
         NEXT_QUESTION,
         CHANGE_ACTIVE_QUESTION,
         DISPLAY_THE_RESULT,
         RESTART} from "../actions/actionTypes"

interface InitialStateI{
    questions:string[];
    answers:string[];
    activeQuestionIndex: number;
    resultToDisplay: string;
}

interface questionAction{
    type: string;
    payload?: any;
}

const initialSate : InitialStateI ={
    questions:["Who?","What?","When?","Where?"],
    answers:[],
    activeQuestionIndex:1,
    resultToDisplay:''
}

export const questionReducer =(state: InitialStateI = initialSate, action: questionAction) : InitialStateI=>{
 switch(action.type){
     case ADD_ANSWER:return{
         ...state, answers:action.payload
     };
     case PREVIOUS_QUESTION:return{
         ...state, activeQuestionIndex : state.activeQuestionIndex>1 ? state.activeQuestionIndex-1 : state.activeQuestionIndex
     };
     case NEXT_QUESTION:return{
         ...state, activeQuestionIndex : state.activeQuestionIndex<4 ? state.activeQuestionIndex+1 : 4
     };
     case CHANGE_ACTIVE_QUESTION:return{
         ...state, activeQuestionIndex : action.payload        
     };
     case DISPLAY_THE_RESULT:return{
         ...state, resultToDisplay : action.payload        
     };
     case RESTART:return{
         ...state, questions:["Who?","What?","When?","Where?"],answers:[], activeQuestionIndex:1, resultToDisplay:''       
     };
     default: return state
 }
}