import React, { useState } from 'react'
import JobDescription from './formSteps/JobDescription'
import SkillForm from './formSteps/SkillForm'
import ContractType from './formSteps/ContractType'
import RecruitmentInfo from './formSteps/RecruitmentInfo'
import GenralView from './formSteps/GenralView'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router'

function Form({currentStep, setCurrentStep}) {
    const currStep = useSelector(state => state.currStep)
    useEffect(() => {
        console.log(currStep)
    }   
    ,[currStep])
    console.log('re-render')

    switch(currStep){
        case 1: return <JobDescription/>
        case 2: return <SkillForm/> 
        case 3: return <ContractType/>
        case 4: return <RecruitmentInfo/>
        case 5: return <GenralView/>
    }
}

export default Form