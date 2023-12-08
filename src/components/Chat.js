import './Chat.css';
import React from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';

init('K3lkrq0uApBmYlHjg');

const Chat = () => {

  const [fname, setfName] = React.useState('');
  const [lname, setlName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };



  const submit = () => {
    if (fname && lname && number && email && message) {
      // TODO - send mail


      const serviceId = 'service_7jj5d6o';
      const templateId = 'template_6f4yh33';
  

      const templateParams = {
        fname,
        lname,
        number,
        email,
        message
      };


      if (isValidEmail(email)) {



        emailjs.send(serviceId, templateId, templateParams)
          .then(response => console.log(response))
          .then(error => console.log(error));

       

        setfName('');
        setlName('');
        setEmail('');
        setMessage('');
        setNumber('');


        alert("Message Sent ! ")
      }
    } else {
      alert('Please fill in all fields.');
    }
  }





  return (


    <section className='contact' id='contact'>
      <h2 className='heading'>Contact <span>Me!</span></h2>


      <form action='/contact'>
        <div className='input-box'>
          <input type="text" placeholder='First Name' value={fname} onChange={e => setfName(e.target.value)} required />
          <input type="text" placeholder='Last Name' value={lname} onChange={e => setlName(e.target.value)} required />
        </div>
        <div className='input-box'>
          <input type="number" placeholder='Mobile Number' value={number} onChange={e => setNumber(e.target.value)} required />
          <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <textarea cols="30" rows="10" placeholder='Your Message' value={message} onChange={e => setMessage(e.target.value)} />
        <input type="submit" value="Send Message" className='btn' onClick={submit} />

      </form>


    </section>
  )
}

export default Chat;