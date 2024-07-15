import { 
    CHANGE_STEP_NEXT,
    CHANGE_STEP_PREV,
    CHANGE_STEP_ONSELECTED 
} from "../constants/actionType"


export const nextStepAction = () => {
    return {
        type:CHANGE_STEP_NEXT
    }
  }
export const prevStepAction = () => {
    console.log('previoss action')
    return {
        type:CHANGE_STEP_PREV
    }
}
export const selectStepAction = (selectedStep) => {
    return {
        type: CHANGE_STEP_ONSELECTED,
        payload: selectedStep
    }
}