import  { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, Navigate, Link} from 'react-router-dom'
import { AdminContext } from '../../contexts/AdminContext'



const AdminLogin = () => {

  const navigate = useNavigate()
  const { setAdmin } = useContext(AdminContext)
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

 
const handleChange = e => {
    setFormData(preData => {
      return {
        ...preData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
  try {
    const res = await axios.post('http://localhost:8080/api/admin/login', formData)
    const admin = res.data.token;
      setAdmin(admin)
      localStorage.setItem('admin-token', JSON.stringify(res.data.token))
      console.log(res);
      navigate('/adminpage')
    } catch (error) {
      console.error('Login error:', error)
    }
    
      
  }
  
  return (
  <div className='create-form'>
      <p className='form-text'>Admin Login</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="email">E-mail*</label><p className='red-text' ></p>
          <input type="email" name='email' className='input' id='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password*</label><p className='red-text1'></p>
          <input type="password" name='password' className='input' id='password' value={formData.password} onChange={handleChange}/>
        </div>
     
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default AdminLogin