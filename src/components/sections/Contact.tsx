// @ts-nocheck
import { useRef } from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

type Props = {}



const StyledContactSection = styled.section`
  margin: 0 auto;
  padding: 0 100px;
  max-width: 900px;
`;

const Contact = (props: Props) => {

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
  
    emailjs
        .sendForm(
            'service_mj48uu3',
            'template_unpf5ut',
            refForm.current,
            'WiovkUVi5h5m0AwN9'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message')
            }
        )
  }

  return (
    <StyledContactSection>
      <h1>Contact</h1>
      <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                  <li className='half'>
                      <input type='text' name='name' placeholder='name' required />
                  </li>
                  <li className='half'>
                      <input type='email' name='email' placeholder='email' required />
                  </li>
                  <li>
                      <input placeholder='Subject' type='text' name='subject' required />                
                  </li>
                  <li>
                      <textarea placeholder='Message' name='message' required></textarea>
                  </li>
                  <li >
                      <input type='submit' className='flat-button' value='SEND' />
                  </li>
              </ul>
          </form>

      </div>
    </StyledContactSection>
  )
}

export default Contact