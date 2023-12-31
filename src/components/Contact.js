import emailjs from "emailjs-com";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Entrer en contact</span>
            <h3>Connectez-vous avec moi en toute confiance</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                Veuillez remplir le formulaire dans cette section pour me contacter. Ou appelez entre 9h00 et 18h00., du lundi au vendredi
                
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <h3>+33 7 58 72 56 32</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a className="line_anim" href="mailto:zouhrimimoun21@gmail.com">
                        zouhrimimoun21@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
                      <span>Submit Message {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
