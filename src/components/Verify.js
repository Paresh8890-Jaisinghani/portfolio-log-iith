import React from "react";
import './Verify.css';
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('K3lkrq0uApBmYlHjg');



const Verify = () =>{
    const [email, setEmail] = React.useState('');


    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
      };


const submit = () =>{
    if(email){
        const serviceId = 'service_7jj5d6o';
        const templateId1 = 'template_iltbn8k';
    



    const templateParams1 = {
        email
}



if (isValidEmail(email)) {
   emailjs.send(serviceId,templateId1,templateParams1)
      .then(response => console.log(response))
      .then(error => console.log(error));
      
      alert("Email Sent, check your inbox to confirm")
    }
}
else{
    alert("Please, fill in your Email I'd")
}
  }


return(
    <section className='verify' id='verify'>
    <h2 className='heading'>Verify <span>Email !</span></h2>

    
    <form action='/verify'>
      <div className='input-box'>
    
    <input type="email" placeholder='email@2.com' value={email} onChange={e => setEmail(e.target.value)} required />

      </div>
      <input type="submit" value="Send" className='btn' onClick={submit} />
     

    </form>


  </section>
)

} 


export default Verify;
