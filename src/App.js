import './App.css';
import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Container, Col, Table  } from 'react-bootstrap';
import contact_img from './img/animated-img.png';


export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pk2yi9c', 'template_nm9guaf', form.current, 'user_e6CZf4K6kU9TCU80qBwFO')
      .then((result) => {
        //   console.log(result.text);
          alert('Thanks you, Form has been submitted');
      }, (error) => {
        //   console.log(error.text);
          alert('Oops!. Try again later');
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
              <form id='contactForm' ref={form} onSubmit={sendEmail}>
                <div className='row'>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='user_name' className='form-control' placeholder='Your Name' />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                      <input type='email' name='use_email' className='form-control' placeholder='Your Email' />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='contact_number' className='form-control' placeholder='Your Mobile no' />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='form-group'>
                      <textarea type='text' name='message' className='form-control' placeholder='Write your message..'></textarea>
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
              <img src={contact_img} />
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

export default App;
