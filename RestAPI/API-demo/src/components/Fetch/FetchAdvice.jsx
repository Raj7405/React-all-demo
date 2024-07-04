import React, { useEffect, useState } from 'react'

function FetchAdvice() {
    const [advice, setAdvice] = useState('')

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then((res)=> {
                // const{advice} = res.data.slip;
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                // console.log(data.slip.advice)
                setAdvice(data.slip.advice)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
    <div style={{border:'2px solid white', padding:15}}>
        <h1>THIS IS FETCH COMPONENT</h1>
        <h2>{advice}</h2>
    </div>
  )
}

export default FetchAdvice