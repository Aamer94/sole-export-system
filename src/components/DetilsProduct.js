import React, { useState } from 'react'
import './DetilsProduct.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faClose } from '@fortawesome/free-solid-svg-icons'
import RequestForm from './RequestForm';

export default function DetilsProduct({ toggleShowDetils, data }) {
    const [showForm, setShowForm] = useState(false);
    const toggleShowForm = () => {
        setShowForm(!showForm);
    }
    return (
        <div className='detils-product'>

            <div className='overlay'>
                <div className='detils-content'>

                    <FontAwesomeIcon icon={faClose} onClick={toggleShowDetils} className='colse-icon' />


                    <Container className='continer-detils'>
                        {showForm && <RequestForm toggleShowForm={toggleShowForm} />}
                        <Row className='detils'>

                            <Col sm={6} >
                                <div className='img-detils'>
                                    <img src={data.image} alt='details' />
                                </div>
                            </Col>
                            <Col sm={6} >
                                <div className='p-2'>

                                    <h2>{data.name} </h2>
                                    <p>
                                        {data.detils}
                                        <br />
                                        {data.moreDetils}
                                    </p>
                                    <Button onClick={toggleShowForm}>Requst</Button>
                                </div>

                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    )
}
