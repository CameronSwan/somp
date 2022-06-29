import React from 'react'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <h1 className='contact--title'>Contact Us</h1>
            <form className='contact--form'>
                <label className='contact--fname_lbl'>First Name:</label>
                <input className='contact--fname' id='fname' type='text' name='fname' placeholder='First Name...' />
                <label className='contact--lname_lbl'>Last Name:</label>
                <input className='contact--lname' id='lname' type='text' name='lname' placeholder='Last Name...' />
                <label className='contact--email_lbl'>Email:</label>
                <input className='contact--email' id='email' type='text' name='email' placeholder='Email...' />
                <label className='contact--message_lbl'>Message:</label>
                <input className='contact--message' id='message' type='text' name='message' placeholder='Message...' />
            </form>
        </div>
    )
}