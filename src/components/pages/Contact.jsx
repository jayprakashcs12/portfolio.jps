import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = ({ theme }) => {

    useEffect(() => {
        document.title = "Contact Us | Jay Prakash Singh";
    }, []);

    let [careerData, setCareerData] = useState({
        fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: ""
    }),

    { fname, mname, lname, email, mobile, address, message } = careerData,

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
        if (!fname || !email || !mobile || !message) {
            toast.error("Please fill the Required Field...!");
        } else {
            emailjs.send('service_q5sj8qq', 'template_122wjce', {
                to_email: 'jayprakash199221@gmail.com', from_name: fname + mname + lname,
                from_email: email, from_mobile: mobile, from_message: message
            }, 'bhsKrqerDTX-guM48')
            .then((resp) => {
                toast.success("Form Submitted Successfully...!");
                setCareerData({
                    fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: ""
                });
            }, (error) => {
                console.error('Failed to send email.... ', error);
                toast.error("Failed to submit form. Please try again later...!");
            });
        }
    },
    

    handleClear = (e) => {
        setCareerData({
            fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: ""
        });
        toast.info("Input Fields Cleared Successfully...!");
    },
    
    ContactButtons = [{text:'Send',variant:'primary',type:'submit',className:'pro-btn btn-md pro-submit',onClick:handleSubmit},
    {text:'Clear',variant:'primary',type:'reset',className:'pro-btn btn-md pro-reset',onClick:handleClear}];

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-conent'>
                <h1 style={{ textAlign: "center", marginBottom:"0" }}>Contact Us</h1>
                <Row>
                    <Col lg={2}></Col>
                    <Col>
                        <form className="mt-4">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" className={`pro-input ${theme}`} placeholder="Enter Your First Name"
                                            name="fname" value={fname} onChange={careersData} />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Middle Name</Form.Label>
                                        <Form.Control type="text" className={`pro-input ${theme}`} placeholder="Enter Your Middle Name" 
                                            name="mname" value={mname} onChange={careersData} />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" className={`pro-input ${theme}`} placeholder="Enter Your Last Name"
                                            name="lname" value={lname} onChange={careersData} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                        <Form.Label>Email ID</Form.Label>
                                        <Form.Control type="text" className={`pro-input ${theme}`} placeholder="Enter Your Email ID"
                                            name="email" value={email} onChange={careersData} />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="tel" className={`pro-input ${theme}`} placeholder="Enter Your Mobile Number"
                                           onKeyDown={handleKeyPress} maxLength={10} name="mobile" value={mobile} onChange={careersData} />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="text" className={`pro-input ${theme}`} placeholder="Enter Your Location"
                                            name="address" value={address} onChange={careersData} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
                        </form>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    )

}

export default Contact;