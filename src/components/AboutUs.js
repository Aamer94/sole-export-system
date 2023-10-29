import React from 'react'
import "./AboutUs.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function AboutUs() {
    return (
        <div className='about-us'>
            <Container className='container-about text-center'>
                <span>ABOUT US</span>
                <Row className='text-center row-about'>

                    <Col sm={12} md={12}>

                        <p>

                            Il Sole Export is an Egyptian company owned and operated by<br />
                            "Mrs.Marwa Salah"<br /> we specialize in exporting Urea fertilizer,
                            phosphate, <br />Livestock feed including Alfalfa hay.
                            <br />
                            The company has been created with a big dream <br /> of being one of
                            the most reliable partner in international trade.
                            <br />
                            our essential goal is to continue providing our customers by<br />
                            miscellaneous foodstuff with the highest quality and with
                            competitive prices that are guaranteed to meet their needs
                            and keep them satisfied. <br />  we sell also different types of fruits
                            and vegetables including the dried and frozen ones, Soy
                            products, <br /> an assorment of nuts,legumes, <br /> spices ,packing
                            juices, a wide variety of honey and oil in addition to the coal,
                            firewood and some other items.

                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
