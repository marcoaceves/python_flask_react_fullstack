import React from 'react'

function Form(props) {
  return (
    <div>
        {props.article && props.article.title}
    </div>
  )
}

export default Form