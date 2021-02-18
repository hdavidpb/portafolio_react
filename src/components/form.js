import React, { useEffect, useState } from "react";
import "../assets/styles/form.css";
import msg from "../assets/img/message.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Form() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const [datos, setDatos] = useState({
    nombre: "",
    phone: "",
    email: "",
    message: "",
  });

  const { nombre, phone, email, message } = datos;

  const [err, setErr] = useState(false);

  const handleInputChangue = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (
      nombre.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      e.preventDefault();
      setErr(true);
    }
  };

  return (
    <>
      <h1 className="tittle_about">CONTACT ME</h1>
      <section data-aos="fade-right" className="form-container" id="form">
        <div className="form-container-card">
          <img src={msg} alt="imagen de mensaje" />
          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contacto" />
            <div className="input_box">
              <input
                onChange={handleInputChangue}
                className="inputs"
                id="name"
                type="text"
                name="nombre"
                placeholder="Name*"
              />
            </div>
            <div className="input_box">
              <input
                onChange={handleInputChangue}
                className="inputs"
                id="phone"
                type="number"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className="input_box">
              <input
                onChange={handleInputChangue}
                className="inputs"
                id="email"
                type="email"
                name="email"
                placeholder="Email*"
              />
            </div>

            <div className="input_box">
              <textarea
                onChange={handleInputChangue}
                className="inputs"
                id="text_area"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            {err ? (
              <p className="msg-err">Debe llenar todos los campos </p>
            ) : null}
            <div className="btn_submit">
              <button id="submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Form;
