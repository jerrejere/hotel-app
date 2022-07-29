import React from 'react'
import  emailjs  from 'emailjs-com'

const Mailer = () => {
function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_3tr1imp','template_0r04xvc','3Zxxt69PPjDkdycRK')
}

  return (
    <div className="container border"
    style={{marginTop:"50px",
    width:'50%',
   backgroundSize: "cover",


    }}>
        <h1 style={{marginTop:'25px'}}>Contact Form</h1>
        <form className="row" style={{margin:"25px 85px 75px 100px"}} 
        onSubmit={sendEmail}
        
        >
            <label>name</label>
            <input type="text" name="name" className="form-control" />

            <label>Email</label>
            <input type="email" name="user_email" className='form-control'/>

            <label>Message</label>
            <textarea name="message" rows="4" />
            <input
             type="submit" 
            value="send" 
            className='form-control btn btn-primary' 
            style={{marginTop: "30px"}} />
        </form>
        </div>
  )
}

export default Mailer