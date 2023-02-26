import './App.css';
import React, { useRef, useState }  from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button  } from 'react-bootstrap';
import contact_img from './img/animated-img.png';


export const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

 
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})[0-9]+$/;
  const nameRegex = /[0-9a-zA-Z]{3,}/;
  const msgRegex = /[0-9a-zA-Z]{6,}/;


  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
  
    if (!formData.name) {
      isValid = false;
      newErrors.name = 'Name is required *';
    } else if (!nameRegex.test(formData.name)) {
      isValid = false;
      newErrors.name = 'Atleast 3 character name *';
    }

    if (!formData.phone) {
      isValid = false;
      newErrors.phone = 'Phone no is required';
    } else if (!phoneRegex.test(formData.phone)) {
      isValid = false;
      newErrors.phone = 'Phone is invalid *';
    }
  
    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email is required *';
    } else if (!emailRegex.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Email is invalid';
    }
  
    if (!formData.message) {
      isValid = false;
      newErrors.message = 'Message is required *';
    } else if (!msgRegex.test(formData.message)) {
      isValid = false;
      newErrors.message = 'Atleast 6 character message';
    }
  
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    if (!validateForm()) return;
    emailjs
      .send('service_u0xdhts', 'template_ye8ibmo', formData, 'user_e6CZf4K6kU9TCU80qBwFO')
      // .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(response => {
        console.log('Email successfully sent!');
        setFormData({ name: '', phone: '', email: '', message: '' });
        window.location.reload();
        alert('Thanks you, Form has been submitted');
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };
  
  return (
    <div className="App">
    <section className='contact-us'>
      <div className='container'>
        <div className='section-title'>
          <span className='sub-title'>
          Enquiry Form
          </span>
          <h2>Get in touch</h2>
          <p>Contact form using emailjs</p>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='contact-form'>
              <form id='contactForm' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                    <input
                      className='form-control'
                      placeholder='Name'
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={event =>
                        setFormData({ ...formData, name: event.target.value })
                      }
                    />
                    {errors.name && <p className='error'>{errors.name}</p>}
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                    <input
                      className='form-control'
                      placeholder='Email address'
                      type="text"
                      id="email"
                      value={formData.email}
                      onChange={event =>
                        setFormData({ ...formData, email: event.target.value })
                      }
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}         
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                    <input
                      className='form-control'
                      placeholder='Phone no'
                      type="num"
                      id="phone"
                      value={formData.phone}
                      onChange={event =>
                        setFormData({ ...formData, phone: event.target.value })
                      }
                    />
                    {errors.phone && <p className='error'>{errors.phone}</p>}
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                    <textarea
                      className='form-control'
                      placeholder='Message'
                      id="message"                      
                      value={formData.message}
                      onChange={event =>
                        setFormData({ ...formData, message: event.target.value })
                      }
                    />
                    {errors.message && <p className='error'>{errors.message}</p>}
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                      <Button type='submit' className='success'>Submit</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='animated-img'>
              <img src={contact_img} alt='Emailjs contact form' />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
  
}

export default App;