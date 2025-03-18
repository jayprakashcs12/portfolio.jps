import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = ({ theme }) => {

    useEffect(() => { document.title = "Contact Us | Jay Prakash Singh"; }, []);

    let [careerData, setCareerData] = useState({
        fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: ""
    }),

    { fname, mname, lname, email, mobile, address, message } = careerData,

    contactNames = [
        { label: "First Name", type: "text", placeholder: "Enter Your First Name", name: "fname" },
        { label: "Middle Name", type: "text", placeholder: "Enter Your Middle Name", name: "mname" },
        { label: "Last Name", type: "text", placeholder: "Enter Your Last Name", name: "lname" },
        { label: "Email ID", type: "email", placeholder: "Enter Your Email ID", name: "email" },
        { label: "Mobile Number", type: "tel", placeholder: "Enter Your Mobile Number", name: "mobile", maxLength: 10 },
        { label: "Location", type: "text", placeholder: "Enter Your Location", name: "address" }
    ],

    careersData = (e) => {
        let { name, value } = e.target;
        setCareerData({ ...careerData, [name]: value });
    },

    handleKeyPress = (e) => {
        if (/[0-9\b\t\r]/.test(e.key) || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete" || e.key === "Backspace") {
        } else { e.preventDefault(); }
    },

    handleSubmit = (e) => {
        e.preventDefault();
        if (!fname || !email || !mobile || !address || !message) {
            toast.error("Please fill the Required Field...!");
        } else {
            emailjs.send('service_q5sj8qq', 'template_122wjce', {
                to_email: 'jayprakash199221@gmail.com', from_name: fname + mname + lname,
                from_email: email, from_mobile: mobile, from_message: message
            }, 'bhsKrqerDTX-guM48')
            .then((resp) => {
                toast.success("Form Submitted Successfully...!");
                setCareerData({ fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: "" });
            }, (error) => {
                console.error('Failed to send email.... ', error);
                toast.error("Failed to submit form. Please try again later...!");
            });
        }
    },

    handleClear = (e) => {
        setCareerData({ fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: "" });
        toast.info("Input Fields Cleared Successfully...!");
    },

    ContactButtons = [{ text: 'Send', variant: 'primary', type: 'submit', className: `pro-btn btn-md pro-submit  ${theme}`, onClick: handleSubmit },
    { text: 'Clear', variant: 'primary', type: 'reset', className: `pro-btn btn-md pro-reset  ${theme}`, onClick: handleClear }
    ];

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className="pro-row">
                    <h1 className='pro-head skill-head'>Contact Us</h1>
                    <Col lg={2}></Col>
                    <Col>
                        <Form className="mt-3">
                            <Row>
                                {contactNames.map((field, i) => (
                                    <Col lg={4} md={4} sm={12} key={i}>
                                        <Form.Group className="mb-2" controlId={`exampleForm.ControlInput${i + 1}`}>
                                            <Form.Label>{field.label}</Form.Label>
                                            <Form.Control type={field.type} className={`pro-input ${theme}`} 
                                                placeholder={field.placeholder} name={field.name} value={field.value} 
                                                onChange={careersData} onKeyDown={field.type === 'tel' ? handleKeyPress : null} 
                                                maxLength={field.maxLength} />
                                        </Form.Group>
                                    </Col>
                                ))}
                            </Row>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} className={`pro-input ${theme}`} placeholder="Enter Your Message Here"
                                    name="message" value={message} onChange={careersData} />
                            </Form.Group>
                            <div className="btn-row">
                                {ContactButtons.map((button, i) =>
                                    <Button key={i} variant={button.variant} type={button.type}
                                        className={button.className} onClick={button.onClick}>{button.text}</Button>
                                )}
                            </div>
                        </Form>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;