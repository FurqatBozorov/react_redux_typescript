import { ADD_ANSWER, 
    PREVIOUS_QUESTION,
     NEXT_QUESTION,
      CHANGE_ACTIVE_QUESTION,
      DISPLAY_THE_RESULT,
      RESTART } from "./actionTypes";

export const addAnswer = (data : any) => {
    return {
        type: ADD_ANSWER,
        payload: data
    }
}

export const prevQuestion = () => {
    return {
        type: PREVIOUS_QUESTION
    }
}
export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION
    }
}

export const changeActiveQuestion = (data:any) =>{
      return{
        type: CHANGE_ACTIVE_QUESTION,
        payload:data
    }
}
export const displayResult = (data:any) =>{
    return{
      type: DISPLAY_THE_RESULT,
      payload:data
  }
}
export const restart= () =>{
    return{
      type: RESTART,
     
  }
}
