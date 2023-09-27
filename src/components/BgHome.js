import React from 'react';
import './BgHome.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default function BgHome() {
    return (
        <div className='bg-home'>
            <div className='overlay'>
                <Container className='content-home'>
                    <Row>
                        <Col sm={8} className='text-center'>
                            <p> Welcome To Sole Export Group</p>
                            <p className='content-home-detils'>Bridging The Gap Between Buyers And SelleRs </p>
                        </Col>
                    </Row>
                </Container>

{/* <Carousel className='carousel-home'>
      <Carousel.Item>
       <img src={example2} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={example1} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={example} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
            </div>
        </div>
    )
}
