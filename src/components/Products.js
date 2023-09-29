import React, { useState } from 'react'
import './Products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import DetilsProduct from './DetilsProduct';
import Data from './Data'

import { useTranslation } from 'react-i18next';

export default function Products() {
    const { t } = useTranslation();

    const [showDetils, setShowDetils] = useState(false);
    const toggleShowDetils = () => {
        setShowDetils(!showDetils);
    }
    return (
        // <div>
        //     <Container className='text-center continer-products'>
        //         <h1>products</h1>
        //         <Row>
        //             {Data.map((item) => (
        //                 <Col key={item.id} sm={6} className='col-product'>


        //                     <Card className='card pg-danger'>
        //                         <Card.Img variant="top" src={item.image} className='img-product' />
        //                         <Card.Body className='card-body'>
        //                             <Card.Title>{item.name}</Card.Title>
        //                             <Card.Text>
        //                                 Some quick example text to build on the card title and make up the
        //                                 bulk of the card's content.
        //                             </Card.Text>
        //                             <div>
        //                                 <Button variant="primary" onClick={toggleShowDetils}>Review</Button>
        //                             </div>
        //                         </Card.Body>
        //                         {/* <div className='overlay'></div> */}
        //                     </Card>

        //                 </Col>
        //             ))}

        //         </Row>
        //     </Container>

        // </div>
        <Container className='text-center continer-products'>

            <h1>{t('Products')}</h1>
            {showDetils && <DetilsProduct toggleShowDetils={toggleShowDetils} />}
            <Row>
                {Data.map((item) => (
                    <Col sm={6} key={item.id} className='col-product'>
                        <Card className='card pg-danger'>
                            <Card.Img variant="top" src={item.image} className='img-product' />
                            <Card.Body className='card-body'>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div>
                                    <Button variant="primary" onClick={toggleShowDetils}>Review</Button>
                                </div>
                            </Card.Body>
                            {/* <div className='overlay'></div> */}
                        </Card>

                    </Col>))}

                {/* <Col sm={6} className='col-product'>
                    <Card className='card' >
                        <Card.Img variant="top" src={pro6} className='img-product' />
                        <Card.Body className='card-body'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={toggleShowDetils}>Review</Button>
                        </Card.Body>
                    </Card>
                </Col> */}

            </Row>

        </Container>
    )
}