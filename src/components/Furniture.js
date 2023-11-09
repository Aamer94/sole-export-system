

import React, { useState } from 'react'
import './Clinker.css'
import ClickerData from './ClinkerData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardImg } from 'react-bootstrap';
import pic from './images/Rabbits feed.png'
import DetilsProduct from './DetilsProduct';
import CementData from './CementData';
import IronData from './IronData';
import ScrollToTopButton from './ScrolToTop';
import './Furniture.css'
import FurnitureData from './furnitureData';
export default function Furniture() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDetils, setShowDetils] = useState(false);
    const toggleShowDetils = () => {
        setShowDetils(!showDetils);
    }
    const Fselectedproduct = (product) => {
        setSelectedProduct(product);
    };
    return (
        <Container className='text-center continer-products'>
              {showDetils && <DetilsProduct data={selectedProduct} toggleShowDetils={toggleShowDetils} />}
            <span className='cement'> Furniture</span>
            <p className='our-products-p'>" Il Sole Export Group offer many type of furniture "</p>
            <Row className='row-products'>
            {FurnitureData.map((item) => (
                    <Col sm={6} key={item.id} className='col-product'>
                        <Card className='card pg-danger'>
                            <Card.Img variant='top' src={item.image} className='img-product' />
                            <Card.Body className='card-body'>
                                <Card.Title>
                                    {item.name}
                                </Card.Title>
                                <Card.Text> {item.detils}</Card.Text>
                                <div> <Button variant="primary" onClick={() => { toggleShowDetils(); Fselectedproduct(item); }}>Review</Button> </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
            <ScrollToTopButton />
        </Container>
    )
}
