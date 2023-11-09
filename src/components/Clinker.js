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
export default function Clinker() {

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
            <span className='cement'> Cements</span>
            <p className='our-products-p'>" Il Sole Group offer many type of cement "
            </p>
            <Row className='row-products'>
                {CementData.map((item) => (
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
            <span className='cement'> Clinker</span>
            <p className='our-products-p'>" Il Sole Group offer many type of Clinker "
            </p>
            <Row className='row-products'>
                {ClickerData.map((item) => (
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
            <span className='cement'> Iron</span>
            <p className='our-products-p'>" Il Sole Group offer many type of Iron "
            </p>
            <p className='our-products-p1'>Our Egyptian factory : is one OF THE WORLD S FASTEST GROWING AND MOST TECHNICALLY ADVANCED STEEL PRODUCERS.
                <br />
                OUR PURPOSE-BUILT : STEELMAKING PLANTS ACROSS EGYPT, HAVE THE CAPACITY TO PRODUCE 7 MILLION TONS OF LONG AND FLAT PRODUCTS PER YEAR.
                <br />
                Our rebar : wire rod, flat steel and welded steel fabric are delivered to customers worldwide to support a multitude of applications
                in the construction, manufacturing, engineering and transport sectors.
                <br />
                Our dedication : to investing in the latest technology and in the skills of our people, coupled with a commitment to ongoing improvement
                and unparalleled customer service,our Egyptian factory has established as a name synonymous with quality, reliability and service excellence.</p>
            <Row className='row-products'>
                {IronData.map((item, index) => (
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

                {IronData.length % 3 === 1 && (
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        className='col-product d-none d-md-block' // Hide this column on small screens
                    >
                        {/* Empty column to center the last item */}
                    </Col>
                )}
            </Row>

        </Container>
    )
}
