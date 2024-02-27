import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
  
    // Update formDetails keys to match the form field names
    const updatedFormDetails = {
      First_Name: formDetails.firstName,
      Last_Name: formDetails.lastName,
      Email: formDetails.email,
      Phone: formDetails.phone,
      Message: formDetails.message,
    };
  
    axios.post('https://sheet.best/api/sheets/c72e723b-9722-400d-b7d9-9978ba657ee2', updatedFormDetails)
      .then((response) => {
        console.log(response);
        setButtonText('Sent');
        setStatus({ success: true, message: "Message sent successfully" });
        setFormDetails(formInitialDetails);
        formEle.reset();
      })
      .catch((error) => {
        console.log(error);
        setButtonText('Failed');
        setStatus({ success: false, message: "Message failed to send" });
      });
  };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="First_Name" value={formDetails.First_Name} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="Last_Name" value={formDetails.Last_Name} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.Email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.Phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.Message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
