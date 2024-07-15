import React from 'react'

const industry = [
  'Alternative Dispute Resolution',
  'Alternative Medicine',
  'International Affairs',
  'International Trade And Development',
  'Computer Games',
  'Computer Software',
  'Legislative Office',
]
const formField  = [
  {
    id: 'Job-tittle',
    heading: 'Write a headline for your job post',
    label: {
      className:[],
      htmlFor: 'jobTittle',
      value:'Job Tittle'
    },
    field: {
      className:[],
      tagName: 'input',
      type: 'text',
      placeholder: 'Job Tittle',
      event:[],
      fieldId:'jobTittle',
      value:'' 
    }
  },
  {
    id: 'Job-discription',
    heading: 'Describe the job in more details',
    label: {
      className:[],
      htmlFor: 'jobDiscription',
      value:'',
    },
    field: {
      className:[],
      tagName: 'textfield',
      type: '',
      placeholder: 'Job Description...',
      event:[],
      fieldId:'jobDiscription',
      value:'' 
    }
  },
  {
    id: 'Industry-type',
    heading: 'Choose industry',
    label: {
      className:[],
      htmlFor: 'industry',
      value:'industry*'
    },
    field: {
      className:[],
      tagName: 'select',
      otherTag: 'option',
      type: '',
      placeholder: 'Job Description...',
      event:[],
      fieldId:'jobDiscription',
      value:[...industry], 
    }
  },
]
function JobDescription() {

  return (
    <div className='form'>
      {/* <form>
        <div className='formField'>
          <h6>Write a headline for your job post</h6>
          <label
            htmlFor='jobTittle'
          >
            Job Tittle*
          </label>
          <input
            type='text'
            placeholder='Job Tittle'
            id='jobTittle'
            value=''
          />
        </div>
        
        <hr/>
        
        <div className='formField'>
          <h6>Describe the job in more details</h6>
          <textarea 
            id="jobDiscription"
            name="jobDiscription"
            placeholder='Job Description...' 
          >
          </textarea>
        </div>
        
        <hr/>
        
        <div className='formField'>
          <h6>Choose industry</h6>
          <label htmlFor='industry'>
            industry*
          </label>
          <select>
            <option>  </option>
            {industry.map((item, i) => {
              return <option key={i} value={item}>{item}</option>
            })}
            <input type='text'/>
          </select>
        </div>
        <hr/>

        <div className='formField radioDiv'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </form> */}
      <form>
        {formField.map((formObj) => {
          // let label = formObj.label;
          // let field = formObj.field;
           switch(formObj.field.tagName){
            case 'input' : 
              return (
              <div key={formObj.id}>
                <h3>{formObj.heading}</h3>
                <label 
                  htmlFor={formObj.label?.value}
                >
                  {formObj.label.value}
                </label>
                <input 
                  type={formObj.field.type} 
                  id={formObj.field.fieldId} 
                  placeholder={formObj.field.placeholder}/>
              </div>
              )
           } 
        })}
      </form>
    </div>
  )
}

export default JobDescription