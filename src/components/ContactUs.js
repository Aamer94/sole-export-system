import React from 'react'
import './ContactUs.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
export default function ContactUs() {
    return (
        <div className='contact-us'>
            <Container className='text-center'>
                <span>Contact US</span>
                <Row className='text-center contact-row'>

                    <Col sm={12} md={6}>

                        <p>
                            <span>Il Sole Export Group </span> <br />
                            We hope this information has given you some
                            insight into what we do.
                            We would love to hear more about your needs
                            and discuss how we can help you succeed.
                            Contact Us
                            Il Sole Export Group on request.
                            Reach out and ask about our production quality, product varieties, and delivery options
                            wherever you are,<br />whenever you need us.

                        </p>
                    </Col>
                    <Col sm={12} md={6}>

                        <p>
                            <span> contact us</span> <br />
                            <FontAwesomeIcon icon={faMobileScreen} className='mobile-icon' />
                            +201091294164 <br />
                            <FontAwesomeIcon icon={faMobileScreen} className='mobile-icon' />
                            +201125092606 <br />
                            <FontAwesomeIcon icon={faMailBulk} className='mobile-icon' />
                            ISEG@ilsole-export-group.com
                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
