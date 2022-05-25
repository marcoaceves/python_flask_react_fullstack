import React, {useState, useEffect} from 'react'
import APIService from './APIService'
function Form(props) {
  const[title, setTitle] = useState('')
  const[body, setBody] = useState('')

  useEffect(()=>{
    setTitle(props.article.title)
    setBody(props.article.body)
  }, [props.article])
  const updateArticle = () =>{
    APIService.UpdateArticle(props.article.id, {title, body})
    .then(resp => props.updatedData(resp))
    .cath(error=> console.log(error))
  }
  return (
    <div>
        {props.article ?(
          <div className = "mb-3">
            <label htmlFor ="title" className='form-label'>Title</label>
            <input type='text' className='form-control' placeholder='Please Enter Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <label htmlFor ="body" className='form-label'>Description</label>
            <textarea value={body} rows={5} type='text' className='form-control' placeholder='Please Enter Description' onChange={(e) => setBody(e.target.value)}></textarea>
            <button className='btn btn-success mt-3' onClick={updateArticle}>Update</button>
          </div>
        ):null }
    </div>
  )
}

export default Form