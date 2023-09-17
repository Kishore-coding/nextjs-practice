import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./ContactBanner.scss"

const ContactBanner = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_7pv8oz9",
        template_id: "template_ufvzaq9",
        user_id: process.env.NEXT_PUBLIC_EMAILJS_USERID,
        template_params: {
          from_name: "contact form",
          from_email: "kishore@starberry.tv",
          message: "Test Email",
          reply_to:""
        },
      });

      console.log("Email sent successfully:", response.data);
    } catch (err) {
      console.log(err, "errrr");
    }
  };
  return (
    <div className="contact-page-wrapper">
      <div className="contact-banner">
      <Container>
        <div className="contact-section">
          <h1>Contact Us</h1>
          <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default ContactBanner;
