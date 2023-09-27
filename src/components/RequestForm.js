import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RequestForm.css'
export default function RequestForm({ toggleShowForm }) {

    const [formRequestData, setFormRequestData] = useState({

        mobile: '',
        email: '',

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRequestData({
            ...formRequestData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formRequestData);
        // You can add code to send the data to your server or perform other actions here.
    };
    return (

        <Container className='form-request'>
            <Row>
                <Col sm={6} md={12}>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Name:</InputGroup.Text>
                        <Form.Control
                            aria-label="Defult"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Mobile:</InputGroup.Text>
                        <Form.Control
                            aria-label="Defult"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Email:</InputGroup.Text>
                        <Form.Control
                            aria-label="Defult"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Quantity</InputGroup.Text>
                        <Form.Control
                            aria-label="Defult"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Packing method</InputGroup.Text>
                        <Form.Control
                            aria-label="Defult"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Port Access:</InputGroup.Text>
                        <Form.Control
                            aria-label="Defult"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>

                </Col>

            </Row>
            <Button className='btn' onClick={toggleShowForm}>Submit</Button>

            {/* <form onSubmit={handleSubmit}>

                <div className='form-group' sm={6}>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id='name' name='name' className='form-control' value={setFormRequestData.nname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='mobile'>Mobile:</label>
                    <input type="tel" id='mobile' name='mobile' className='form-control' value={setFormRequestData.mobile} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id='email' name='email' className='form-control' value={setFormRequestData.email} onChange={handleChange} />
                </div>
                <button type="submit" className='btn'>Submit</button>
            </form> */}
        </Container>
    )
}
