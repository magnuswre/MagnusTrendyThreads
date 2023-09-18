import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
import { checkIfEmpty } from './Validation'
import {useNavigate, Navigate} from 'react-router-dom'

const initState = {
  firstName: '',
  lastName: '',
  streetName: '',
  postalCode: '',
  city: '',
  mobile: '',
  company: '',
  email: '',
  password: '',
  confirmPassword: '',
  profileImg: ''
}


const Registration = () => {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initState)

  
  const [error, setError] = useState({
    lastName: '',
    firstName: '',
    streetName: '',
    postalCode: '',
    city: '',
    mobile: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImg: ''

  })



  const handleChaneInput = (e) =>{
    setFormData(prevData =>{
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

     if(checkIfEmpty(formData.firstName)){
      setError(data => { 
      return {
      ...data,firstName: 'You need to enter a last name'}})}


    if(checkIfEmpty(formData.lastName)){
      setError(data => { 
      return {
      ...data,lastName: 'You need to enter a last name'}})}

    if(checkIfEmpty(formData.streetName)){
      setError(data => { 
      return {
      ...data,streetName: 'You need to enter a street name'}})}

    if(checkIfEmpty(formData.postalCode)){
      setError(data => {
     return {
      ...data,postalCode: 'You need to enter a postal code'}})}

    if(checkIfEmpty(formData.city)){
      setError(data => {
      return {
      ...data,city: 'You need to enter a city'}})}

    if(checkIfEmpty(formData.mobile)){
      setError(data => { 
      return {
      ...data,mobile: 'You need to enter a mobile'}})}


    if(checkIfEmpty(formData.email)){
      setError(data => { 
      return {
      ...data,email: 'You need to enter a email adress'}})}

    if(checkIfEmpty(formData.password)){
      setError(data => { 
      return {
      ...data,password: 'You need to enter a password'}})}

      if(formData.password != formData.confirmPassword){
        setError(data => {
        return{
          ...data, confirmPassword: 'password does not match '
          
        }})
        return true
      }

          
        const res = await axios.post(' http://localhost:8080/api/user/register', formData)
        

        console.log(res.data.token);
      
        setFormData(initState)
        if(res){
          navigate('/login')
        }
  }

  return (
    <div className='create-form'>
      <p className='form-text'>Please Register Your new Account</p>
      <form onSubmit={handleSubmit}>

      <div className='form-group right'>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" name='firstName' className='input ' id='firstName' value={formData.firstName} onChange={handleChaneInput}  />
          <p className='error-text'>{error.firstName}</p>
        </div>
      <div className='form-group left'>
          <label htmlFor="lastName">Last Name*</label>
          <input type="text" name='lastName' className='input ' id='lastName' value={formData.lastName} onChange={handleChaneInput} />
          <p className='error-text'>{error.lastName}</p>
        </div>
      <div className='form-group'>
          <label htmlFor="streetName">Street Name*</label>
          <input type="text" name='streetName' className='input' id='streetName' value={formData.streetName} onChange={handleChaneInput} />
          <p className='error-text'>{error.streetName}</p>
        </div>
        <div className='form-group right'>
          <label htmlFor="postalCode">Postal Code*</label>
          <input type="text" name='postalCode' className='input' id='postalCode' value={formData.postalCode} onChange={handleChaneInput}  />
          <p className='error-text'>{error.postalCode}</p>
        </div>
        <div className='form-group left'>
          <label htmlFor="city">City*</label>
          <input type="text" name='city' className='input' id='city' value={formData.city} onChange={handleChaneInput} />
          <p className='error-text'>{error.city}</p>
        </div>
        <div className='form-group right'>
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name='mobile' className='input' id='mobile' value={formData.mobile} onChange={handleChaneInput} />
          <p className='error-text'>{error.mobile}</p>
        </div>
        <div className='form-group left'>
          <label htmlFor="company">Company (optional)</label>
          <input type="text" name='company' className='input' id='company'  value={formData.company} onChange={handleChaneInput}/>
          <p>{error.company}</p>

        </div>
        <div className='form-group'>
          <label htmlFor="email">E-mail*</label>
          <input type="email" name='email' className='input' id='email' value={formData.email} onChange={handleChaneInput} />
          <p className='error-text'>{error.email}</p>
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password*</label>
          <input type="password" name='password' className='input' id='password' value={formData.password} onChange={handleChaneInput}/>
          <p className='error-text'> {error.password}</p>
        </div>
        <div className='form-group'>
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input type="password" name='confirmPassword' className='input' id='confirmPassword' value={formData.confirmPassword} onChange={handleChaneInput}/>
          <p className='error-text'>{error.confirmPassword}</p>
        </div>
        <div className='form-group'>
          <label htmlFor="profileImg">Upload Profile Image (optional)</label>
          <input type="text" name='profileImg' className='input' id='profileImg' value={formData.profileImg} onChange={handleChaneInput}/>
        </div>
        <div>
          <input className='checkbox' type="checkbox" />
          <label className='text' htmlFor="checkbox">I have read and accepts the terms and agreements</label>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>

  )
}

export default Registration