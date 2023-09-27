import React from 'react'
import "./AboutUs.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function AboutUs() {
    return (
        <div className='about-us'>
            <Container>
                <Row className='text-center'>
                    <Col sm={12} md={12}>
                        <h2>ABOUT US</h2>
                        <p>
                            Sole Export is an Egyption Company <br />
                            The Company Is Created With Big Dreem
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
