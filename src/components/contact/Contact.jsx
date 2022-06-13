import './contact.css';
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import {info} from '../../data'
const Contact = ({style}) => {
    const formRef = useRef();
    // set variable to confirm that the email message sent successfully
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    // useing emailjs to send emails
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_18igkn1',
         'template_8oj9jqm',
         formRef.current, '9Xct6LoX3lP7iDWsc')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        
    }
  return (
    <div className='c'>
       <div className='c-bg'>
          <div className='c-wrapper'>
              <div className='c-left'>
                <h1 className='c-title'> let's discuss your project</h1>
                <div className='c-info'>
              {
                  info.map(item => (
                    <div className='c-info-item' key={item.id}>
                    <a href={item.href} style={{
    color: darkMode ? "white" : "black"}}>
                      <img 
                     src={item.img}
                     alt="" 
                     className='c-e-icon' />
                     {item.title}
                    </a>
                    </div>
                  ))
              }
                </div>
              </div>

              <div className='c-right'>
                  <p className='desc'>
                      <b>what's your story </b>
                      get in touch with me :
                  </p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                      <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                      <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                      <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                      <button>Submit</button>
                     { done && alert("your message has been sent successfully")}
                  </form>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Contact