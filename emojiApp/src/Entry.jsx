import React from "react"

function Entry(props) {
    return (
        <>
            
      <div className='card1'>
        <image>{props.emoji}</image>
          <h2>{ props.title}</h2>
          <p>{props.description}</p>

      </div>
        </>
    )
}

export default Entry;

   