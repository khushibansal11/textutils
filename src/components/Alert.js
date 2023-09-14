import React from 'react'

export default function Alert(props) {
  const capitalise=(word)=>{
      return word.charAt(0).toUpperCase()+word.slice(1)

  }
  return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        {capitalise(props.alert.type)}: {props.alert.msg}
        </div>
  )
}


