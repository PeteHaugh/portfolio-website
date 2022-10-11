import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
interface IFormInput {
  name: string;
  email: string;
  message: string;
  contactNumber: number;
}

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = () => {
    generateContactNumber();
    emailjs
      .sendForm(
        "service_mj48uu3",
        "template_unpf5ut",
        "#contact-form",
        "WiovkUVi5h5m0AwN9"
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        setSubmitted(false);
      });
  };

  return (
    <>
    <StyledContactSection>
      <h1>Contact</h1>

      {submitted ? (
        <ThanksDiv>
          <h3>Thanks for sending an email!</h3>
          <p>I'll reply to it as soon as I see it!</p>
        </ThanksDiv>
      ) : (
        <StyledForm id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              {...register("name", { required: true })}
              placeholder="Your name"
              type="text"
            />
          </label>
          <label>
            <input
              {...register("email", { required: true })}
              placeholder="Your name"
              type="email"
            />
          </label>
          <label>
            <textarea
              {...register("message", { required: true })}
              placeholder="Please leave a message"
              rows={8}
            />
          </label>
          <input type="hidden" name="contact_number" value={contactNumber} />
          <ErrorDiv>
            {errors.name && <span>- The Name Field is required</span>}
            {errors.email && <span>- The Email Field is required</span>}
            {errors.message && <span>- The Comment Field is required</span>}
          </ErrorDiv>

          <input type="submit" />
        </StyledForm>
      )}
      <StyledImg src={require("../../assets/images/headphones.webp")} />
    </StyledContactSection>
      
      </>
  );
};

export default Contact;

const ThanksDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  color: white;
  max-width: 48rem;
  margin: 0 auto;

  > h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 48rem;
  margin: 0 auto;

  > h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    
  }

  > label {
    margin-bottom: 5px;
  }

  > input {
    cursor: pointer;
    background: var(--heading-color);
    color: white;
    font-weight: 700;
    padding: 4px 2px;
    border-radius: 0.5rem;
    width: 12rem;
    margin: 0 auto;

    &:hover {
      background-color: red;
    }

    &:focus {
      outline: none;
    }
  }

  > label > input,
  textarea {
    outline: none;
    padding: 8px 12px;
    margin-bottom: 1rem;
    width: 100%;

    &:focus {
      outline: none !important;
      border: 1px solid var(--heading-color);
    }
  }
`;

const StyledContactSection = styled.section`
  max-width: 48rem;
  margin: 0 auto;
  padding: 5px;
  height: 60vh;
  position: relative;

  > h1 {
    margin: 20px 0;
    font-size: 50px;
    color: var(--heading-color);
  }
`;

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  > span {
    color: red;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  width: 800px;
  left: 800px;
  transform: rotate(-30deg);
  top: -300px;
`;
