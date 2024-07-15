import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  nextStepAction,
  prevStepAction,
 } from '../actionGenrators/actionSteps'

function NavigationBtn({currentStep, setCurrentStep}) {

  const currStep = useSelector(state => state.currStep)
  const dispatch = useDispatch()
  
  const handleNext = () => {
    dispatch(nextStepAction())
  }
  
  const handlePrevious = () => {
    dispatch(prevStepAction())
  }
  
  return (
    <div className='navigationBtn'>
        <button
            className='btn' 
            id='previous' 
            onClick={handlePrevious}
            style={{
                visibility: currStep != 1 ? 'visible' : 'hidden'
            }}
        >
        Previous
        </button> 
        {currStep < 5 
            ? <button 
                className='btn' 
                id='next' 
                onClick={handleNext}
                >
                Next
                </button> 
            : <button id='postNow'>Post now</button>
        }
    </div>
  )
}

export default NavigationBtn