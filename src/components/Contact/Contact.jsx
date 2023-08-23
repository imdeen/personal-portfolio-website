import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import PlanetModel from '../Planet/Planet';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'deen',
        from_email: form.email,
        to_email: 'deenusaifi8851@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false);
        alert('your message reached me, i will get back to u, ASAP.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('something went wrong.')
      })
  }

  return (

    <section className='top-paddings'>
      <div className='c-wrapper'>
        <div className='contact-form'>
          {/* left */}
          <motion.div
            initial={{ x: "-4rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
            }}

          >
            <PlanetModel />

          </motion.div>

          {/* right */}
          <motion.div
            initial={{ x: "4rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
            }}

            className='right'>
            <h3 className='secondaryText2'>Get in touch</h3>
            <h1 className='aquaText'>Contact</h1>

          

            <form ref={formRef} onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='your name' />
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='your email' />
              <label>Message</label>
              <textarea rows={9} name="message" value={form.message} onChange={handleChange} placeholder='your message' />
              <input className='button' type="submit" value={loading ? 'sending...' : 'send'} />
            </form>
          


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact