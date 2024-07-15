export const initialState = {
    currStep: 1,
    jobDescription: {
        step: 1,
        jobTitle: '',
        jobDetail: '',
        industryType: '',
        engagement: '', 
        location: {
            city:'',
            country:''
        },
        workPlaceType: '',
    },
    skills:{
        step:2,
        seniorityLevel:'',
        experience:'',
        mangementExp:'',
        skillSets:[],
    },
    contractType:{
        step:3,
    },
    recruitmentInfo:{
        step:4,
    },
    genralView:{
        step:5,
    }

}

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case 'CHANGE_STEP_NEXT': 
        return {
            ...state,
            currStep: state.currStep + 1
        }

        case 'CHANGE_STEP_PREV': 
        console.log('hdd',action.type)
        return {
            ...state,
            currStep: state.currStep - 1
        }
        
        case 'CHANGE_STEP_ONSELECTED': 
        return {
            ...state,
            currStep: action.payload
        }

        default : return state
    }
}


export default rootReducer