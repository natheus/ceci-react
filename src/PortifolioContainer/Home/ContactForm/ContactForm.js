import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <div>
      <div className="contactform-container" id="contato">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                name="user_name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Endereço de e-mail"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Assunto"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                cols="30"
                rows="8"
                placeholder="Sua mensagem"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-2 mx-auto center">
              <input
                type="submit"
                className="btn btn-info"
                value="Enviar"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
