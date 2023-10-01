import React, { useState } from 'react'
import './DetilsProduct.css'
import Products from './Products'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import pro8 from "../asets/pro8.jpg"

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
                                    <img src={pro8} alt='details' />
                                </div>
                            </Col>
                            <Col sm={6} >
                                <div className='p-2'>

                                    <h2>{data[1].name} </h2>
                                    <p>
                                        This makeup product is a versatile and long-lasting foundation
                                        that provides a smooth and flawless complexion.
                                        no gore
                                        This makeup product is a versatile and long-lasting
                                        This makeup product is a versatile and long-lasting foundatihrue
                                        on
                                        that provides a smooth and flawless complexion.
                                        This makeup product is a versatile and long-lasting
                                        This makeup product is a versatile and long-lasting foundation
                                        that provides a smooth and flawless complexion.
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
