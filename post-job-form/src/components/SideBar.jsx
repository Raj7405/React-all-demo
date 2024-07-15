import React from 'react'
import { useDispatch } from 'react-redux'
import { selectStepAction } from '../actionGenrators/actionSteps'

function SideBar({setCurrentStep}) {
  const dispatch = useDispatch()
  
  let steps = ['JOB DESCRIPTION', 'SKILLS', 'CONTRACT TYPE', 'RECRUITMENT TYPE', 'GENERAL REVIEW']

  const handleSideBarClick = (e) => {
    dispatch(selectStepAction(JSON.parse(e.target.id)))
  }
  return (
    <>  
        {steps.map((item,i) => {
            let step = i + 1;
            return (
            <div className='sideLinks' key={i+item} onClick={handleSideBarClick} id = {step}>
                <div className='circleIndex' id={step}>{step}</div>
                <p id={step} >{item}</p>
            </div>
            )
        })}
    </>
  )
}

export default SideBar