import React, { useState } from 'react'
import './Products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetilsProduct from './DetilsProduct';
import Data from './Data'
import ScrollToTopButton from './ScrolToTop.js'
// import { useTranslation } from 'react-i18next';


export default function Products() {
    // const { t } = useTranslation();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDetils, setShowDetils] = useState(false);
    const toggleShowDetils = () => {
        setShowDetils(!showDetils);
    }
    const Fselectedproduct = (product) => {
        setSelectedProduct(product);
    };
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

            <Row className='row-ul'>
                <h1>Our Products</h1>
                <p className='our-products-p'>" Il Sole Group values the diverse needs of its
                    customers and seeks to exceed their expectations. "
                </p>
                <p className='our-products-p1'>Here is the list of our various Products.</p>
                <Col sm={6}>
                    <ul>
                        <li>Urea fertilizer</li>
                        <li>Phosphate</li>
                        <li>Coal and firewood</li>
                        <li>Livestock feed</li>
                        <li>Medjool dates</li>
                        <li>Sagebrush</li>
                        <li>Soya Products</li>
                        <li>Nuts</li>
                        <li>Legumes</li>
                        <li>Spices</li>
                        <li>Sesames</li>
                        <li>Fresh fruits</li>
                        <li>Dries fruits</li>
                        <li>Fresh vegetables</li>
                        <li>Dried vegetables</li>
                        <li>Frozen fruits and vegetables</li>
                        <li>Fruit juice packing</li>
                        <li>Oil and fats</li>
                        <li>A varity of honey</li>
                    </ul>
                </Col>
            </Row>



            {showDetils && <DetilsProduct data={selectedProduct} toggleShowDetils={toggleShowDetils} />}

    

            <Row className='row-products'>
                <h1>Products</h1>
                {Data.map((item) => (

                    <Col sm={6} key={item.id} className='col-product'>

                        <Card className='card pg-danger'>
                            <Card.Img variant="top" src={item.image} className='img-product' />
                            <Card.Body className='card-body'>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.detils}
                                </Card.Text>
                                <div>
                                    <Button variant="primary" onClick={() => { toggleShowDetils(); Fselectedproduct(item); }}>Review</Button>

                                </div>
                            </Card.Body>
                            {/* <div className='overlay'></div> */}
                        </Card>

                    </Col>



                ))}

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
            <ScrollToTopButton />
        </Container>

    )
}
