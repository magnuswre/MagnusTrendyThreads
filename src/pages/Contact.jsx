import axios from 'axios'
import Map from '../assets/map.png'
import  { useState } from 'react'
import { checkIfEmpty } from './Validation'

const initState = {
  fullName: '',
  email: '',
  mobile: '',
  company: '',
  subject: ''
}

const Contact = () => {

  const [formData, setFormData] = useState(initState)
  
  const [error, setError] = useState({
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    subject: ''
   })

  const handleChangeInput = (e) =>{
    setFormData(prevData =>{
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

     if(checkIfEmpty(formData.fullName)){
      setError(data => { 
      return {
      ...data, fullName: 'You need to enter a name'}})}


    if(checkIfEmpty(formData.email)){
      setError(data => { 
      return {
      ...data, email: 'You need to enter an email'}})}

    if(checkIfEmpty(formData.subject)){
      setError(data => { 
      return {
      ...data, subject: 'You need to enter a subject'}})}

      
      console.log(formData);

        try {
          const res = await axios.post('http://localhost:8080/api/contact/add', formData);
          console.log(res);
          setFormData(initState);
        } catch (error) {
          console.error('Axios error:', error.message);
          console.error('Axios status code:', error.response.status);
        }
    }


return (

  <div >
    
    <div className='contact-hero'>
    </div> 
    
    <div className='create-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group right'>
          <label htmlFor="fullName">Full Name*</label>
          <input 
          type="text" 
          name='fullName' 
          className='input' 
          id='fullName' 
          value={formData.fullName} 
          onChange={handleChangeInput}  />
          <p className='error-text'>{error.fullName}</p>
       </div>

       <div className='form-group left'>
          <label htmlFor="email">E-mail*</label>
          <input 
          type="email" 
          name='email' 
          className='input' 
          id='email' 
          value={formData.email} 
          onChange={handleChangeInput} />
          <p className='error-text'>{error.email}</p>
       </div>

      <div className='form-group right'>
         <label htmlFor="mobile">Mobile (optional)</label>
         <input 
         type="text" 
         name='mobile' 
         className='input' 
         id='mobile' 
         value={formData.mobile} 
         onChange={handleChangeInput} />
         <p className='error-text'>{error.mobile}</p>
      </div>

      <div className='form-group left'>
        <label htmlFor="company">Company (optional)</label>
        <input 
        type="text" 
        name='company' 
        className='input'
         id='company'  
         value={formData.company} 
         onChange={handleChangeInput}/>
        <p>{error.company}</p>
      </div>
 
      <div className='form-group'>
        <label htmlFor="subject">subject</label>
        <textarea  
        name="subject" 
        id="subject"  
        className='message-input'  
        value={formData.subject} 
        onChange={handleChangeInput}></textarea>
        <p className='error-text'>{error.subject}</p>
       </div>


    
      <div>
        <input className='checkbox' type="checkbox" />
        <label className='text' htmlFor="checkbox">Save my name, email and website in this browser for the next time I make a comment</label>
      </div>
     <button className='btn btn-primary'>Submit</button>
   </form>
 </div>
      <div>
        <img id='map' src={Map} alt="map" />
      </div>
  </div>
    
  )
}

export default Contact