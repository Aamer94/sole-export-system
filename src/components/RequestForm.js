import React, { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RequestForm.css'
import emailjs from '@emailjs/browser';
export default function RequestForm({ toggleShowForm }) {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9j6nwzg', 'template_ou3r5a1', form.current, 'ZbnhQ8nXtahuA0G8n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    // const [formRequestData, setFormRequestData] = useState({

    //     mobile: '',
    //     email: '',

    // });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormRequestData({
    //         ...formRequestData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form data submitted:', formRequestData);
    //     // You can add code to send the data to your server or perform other actions here.
    // };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>

        // <Container className='form-request'>
        //     <Row>
        //         <Col sm={6} md={12}>

        //             <InputGroup className="mb-3">
        //                 <InputGroup.Text id="inputGroup-sizing-sm">Name:</InputGroup.Text>
        //                 <Form.Control
        //                     aria-label="Defult"
        //                     aria-describedby="inputGroup-sizing-sm"
        //                 />
        //             </InputGroup>
        //             <InputGroup className="mb-3">
        //                 <InputGroup.Text id="inputGroup-sizing-sm">Mobile:</InputGroup.Text>
        //                 <Form.Control
        //                     aria-label="Defult"
        //                     aria-describedby="inputGroup-sizing-sm"
        //                 />
        //             </InputGroup>
        //             <InputGroup className="mb-3">
        //                 <InputGroup.Text id="inputGroup-sizing-sm">Email:</InputGroup.Text>
        //                 <Form.Control
        //                     aria-label="Defult"
        //                     aria-describedby="inputGroup-sizing-sm"
        //                 />
        //             </InputGroup>
        //             <InputGroup className="mb-3">
        //                 <InputGroup.Text id="inputGroup-sizing-sm">Quantity</InputGroup.Text>
        //                 <Form.Control
        //                     aria-label="Defult"
        //                     aria-describedby="inputGroup-sizing-sm"
        //                 />
        //             </InputGroup>
        //             <InputGroup className="mb-3">
        //                 <InputGroup.Text id="inputGroup-sizing-sm">Packing method</InputGroup.Text>
        //                 <Form.Control
        //                     aria-label="Defult"
        //                     aria-describedby="inputGroup-sizing-sm"
        //                 />
        //             </InputGroup>

        //             <InputGroup className="mb-3">
        //                 <InputGroup.Text id="inputGroup-sizing-sm">Port Access:</InputGroup.Text>
        //                 <Form.Control
        //                     aria-label="Defult"
        //                     aria-describedby="inputGroup-sizing-sm"
        //                 />
        //             </InputGroup>

        //         </Col>

        //     </Row>
        //     <Button className='btn' onClick={toggleShowForm}>Submit</Button>

        // </Container>
    )
}
