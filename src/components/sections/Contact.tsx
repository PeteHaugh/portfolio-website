import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
interface IFormInput {
  name: string;
  email: string;
  message: string;
  contactNumber: number;
  errors: any;
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
        toast("Email send error");
      });
  };

  return (
    <>
      <StyledContactSection>
        <h1>Contact</h1>
        <Toaster />
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
                placeholder="Your email"
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
              {errors.name && toast.error("Please add your name")}
              {errors.email && toast.error("Please add your email")}
              {errors.message && toast.error("Please add a message")}
            </ErrorDiv>

            <input type="submit" />
          </StyledForm>
        )}
        <ImgContainer>
          <StyledImg src={require("../../assets/images/headphones.webp")} />
          <StyledShadow
            src={require("../../assets/images/HeadphoneShade.webp")}
          />
        </ImgContainer>
      </StyledContactSection>
    </>
  );
};

export default Contact;

const ImgContainer = styled.div`
  position: absolute;
  display: block;
  width: calc(100vw - 700px);
  height: 900px;
  left: 700px;
  top: -250px;
  overflow: hidden;
`;

const ThanksDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
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
    margin: 20px auto;

    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(0.95);
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
    border: 1px solid gray;
    font-family: inherit;
    border-radius: 5px;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      opacity: 0.5; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      opacity: 0.5;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      opacity: 0.5;
    }

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
  position: relative;
  

  > h1 {
    margin: 20px 0;
    font-size: 50px;
    color: var(--heading-color);
    text-shadow: 5px 5px 0 #bcbcbc;
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }
`;

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-around;

  display: none;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 800px;
  transform: rotate(-30deg);
  z-index: 10;
  display: block;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledShadow = styled.img`
  position: absolute;
  width: 800px;
  left: 10px;
  transform: rotate(-30deg);
  top: -10px;
  z-index: 9;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
