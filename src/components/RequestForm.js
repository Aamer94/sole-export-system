import React, { useRef } from 'react'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RequestForm.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useFormik  } from 'formik';
import * as Yup from 'yup';




export default function RequestForm({ toggleShowForm }) {

    const form = useRef();

    const validationSchema = Yup.object({
        user_name: Yup.string().required('Name is required'),
        user_mobile: Yup.string().required('Mobile is required'),
        user_email: Yup.string().email('Invalid email format').required('Email is required'),
        product_name: Yup.string().required('Product Name is required'),
        product_quantity: Yup.string().required('Product Quantity is required'),
        portaccess: Yup.string(),
        message: Yup.string(),
      });
    
      const formik = useFormik({
        initialValues: {
          user_name: '',
          user_mobile: '',
          user_email: '',
          product_name: '',
          product_quantity: '',
          portaccess: '',
          message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          emailjs
            .sendForm('service_9j6nwzg', 'template_ou3r5a1', form.current, 'ZbnhQ8nXtahuA0G8n')
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          toggleShowForm();
        },
      });
    
      return (
        <Container className='form-request'>
<Row className='form-request-row'>
<FontAwesomeIcon icon={faClose} onClick={toggleShowForm} className='colse-icon-form' />
<Col className='col-form'  md={12}>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={formik.values.user_name}
            onChange={formik.handleChange}
            placeholder='add your full name'
          />
          {formik.errors.user_name && formik.touched.user_name && (
            <div className="alert alert-danger error">{formik.errors.user_name}</div>
          )}
    
          <label>Mobile</label>
          <input
            type="text"
            name="user_mobile"
            value={formik.values.user_mobile}
            onChange={formik.handleChange}
            placeholder='add your mobile'
          />
          {formik.errors.user_mobile && formik.touched.user_mobile && (
            <div className="error alert alert-danger">{formik.errors.user_mobile}</div>
          )}
    
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={formik.values.user_email}
            onChange={formik.handleChange}
            placeholder='add your email '
          />
          {formik.errors.user_email && formik.touched.user_email && (
            <div className="error alert alert-danger">{formik.errors.user_email}</div>
          )}
    
          <label>Product Name</label>
          <input
            type="text"
            name="product_name"
            value={formik.values.product_name}
            onChange={formik.handleChange}
            placeholder='add name product '
          />
          {formik.errors.product_name && formik.touched.product_name && (
            <div className="error alert alert-danger">{formik.errors.product_name}</div>
          )}
    
          <label>Product Quantity</label>
          <input
            type="text"
            name="product_quantity"
            value={formik.values.product_quantity}
            onChange={formik.handleChange}
            placeholder='add Quantity product '
          />
          {formik.errors.product_quantity && formik.touched.product_quantity && (
            <div className="error alert alert-danger">{formik.errors.product_quantity}</div>
          )}
    
          <label>Port Access</label>
          <input
            type="text"
            name="portaccess"
            value={formik.values.portaccess}
            onChange={formik.handleChange}
            placeholder='add port access'
          />
    
          <label>Note</label>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder='add any thing you need to say'
          />
    
          <button type="submit" className="btn">
            Send
          </button>
        </form>
        </Col>
        </Row>
        </Container>
      );
    }
    

    // const form = useRef();

    // const validationSchema = Yup.object({
    //     user_name: Yup.string().required('Name is required'),
    //     user_mobile: Yup.string().required('Mobile is required'),
    //     user_email: Yup.string().email('Invalid email format').required('Email is required'),
    //     product_name: Yup.string().required('Product Name is required'),
    //     product_quantity: Yup.string().required('Product Quantity is required'),
    //     portaccess: Yup.string(),
    //     message: Yup.string(),
    // });

    // const formik = useFormik({
    //     initialValues: {
    //         user_name: '',
    //         user_mobile: '',
    //         user_email: '',
    //         product_name: '',
    //         product_quantity: '',
    //         portaccess: '',
    //         message: '',
    //     },
      
    //     validationSchema: validationSchema,
       
    //     onSubmit: (values) => {
    //         // Handle form submission, e.g., send data to your server
    //         emailjs.sendForm('service_9j6nwzg', 'template_ou3r5a1', form.current, 'ZbnhQ8nXtahuA0G8n')
    //             .then((result) => {
    //                 console.log(result.text);
    //             }, (error) => {
    //                 console.log(error.text);
    //             });
    //         toggleShowForm();
    //     },
    // });







    // // const form = useRef();
    // // const sendEmail = (e) => {
    // //     e.preventDefault();

    // //     emailjs.sendForm('service_9j6nwzg', 'template_ou3r5a1', form.current, 'ZbnhQ8nXtahuA0G8n')
    // //         .then((result) => {
    // //             console.log(result.text);
    // //         }, (error) => {
    // //             console.log(error.text);
    // //         });
    // //     toggleShowForm();
    // // };



    // return (


    //     <Container className='form-request'>

    //         <Row className='form-request-row'>
    //             <FontAwesomeIcon icon={faClose} onClick={toggleShowForm} className='colse-icon-form' />
    //             <Col className='col-form' sm={6} md={12}>


    //                 <form onSubmit={formik.handleSubmit}>
    //                     <label>Name</label>
    //                     <input
    //                         type="text"
    //                         name="user_name"
    //                         value={formik.values.user_name}
    //                         onChange={formik.handleChange}
    //                     />
    //                     {formik.errors.user_name && formik.touched.user_name && (
    //                         <div className="error">{formik.errors.user_name}</div>)}

    //                     <label>Mobile</label>
    //                     <input
    //                         type="text"
    //                         name="user_mobile"
    //                         value={formik.values.user_mobile}
    //                         onChange={formik.handleChange}
    //                     />
    //                     {formik.errors.user_mobile && formik.touched.user_mobile && (
    //                         <div className="error">{formik.errors.user_mobile}</div>)
    //   }

    //                     <label>Email</label>
    //                     <input
    //                         type="email"
    //                         name="user_email"
    //                         value={formik.values.user_email}
    //                         onChange={formik.handleChange}
    //                     />
    //                     {formik.errors.user_email && formik.touched.user_email && (
    //                         <div className="error">{formik.errors.user_email}</div>)
    //   }

    //                     <label>Product Name</label>
    //                     <input
    //                         type="text"
    //                         name="product_name"
    //                         value={formik.values.product_name}
    //                         onChange={formik.handleChange}
    //                     />
    //                     {formik.errors.product_name && formik.touched.product_name && (
    //                         <div className="error">{formik.errors.product_name}</div>)
    //   }

    //                     <label>Product Quantity</label>
    //                     <input
    //                         type="text"
    //                         name="product_quantity"
    //                         value={formik.values.product_quantity}
    //                         onChange={formik.handleChange}
    //                     />
    //                     {formik.errors.product_quantity && formik.touched.product_quantity && (
    //                         <div className="error">{formik.errors.product_quantity}</div>)
    //   }

    //                     <label>Port Access</label>
    //                     <input
    //                         type="text"
    //                         name="portaccess"
    //                         value={formik.values.portaccess}
    //                         onChange={formik.handleChange}
    //                     />

    //                     <label>Note</label>
    //                     <textarea
    //                         name="message"
    //                         value={formik.values.message}
    //                         onChange={formik.handleChange}
    //                     />

    //                     <button type="submit" className='btn'>Send</button>
    //                 </form>



    //                 {/* <label>Name</label>
    //                         <input type="text" name="user_name" />
    //                         <label>Mobile</label>
    //                         <input type="text" name="user_mobile" />
    //                         <label>Email</label>
    //                         <input type="email" name="user_email" />
    //                         <label>Product Name</label>
    //                         <input type="text" name="product_name" />
    //                         <label>Product Quantity</label>
    //                         <input type="text" name="product_quantity" />
    //                         <label>Port Access</label>
    //                         <input type="text" name="portaccess" />
    //                         <label>Note</label>
    //                         <textarea name="message" /> */}

    //                 {/* <input type="submit" className='btn' value="Send" /> */}

    //             </Col>

    //         </Row>


    //     </Container>
    //     //             <InputGroup className="mb-3">
    //     //                 <InputGroup.Text id="inputGroup-sizing-sm">Name:</InputGroup.Text>
    //     //                 <Form.Control
    //     //                     aria-label="Defult"
    //     //                     aria-describedby="inputGroup-sizing-sm"
    //     //                 />
    //     //             </InputGroup>
    //     //             <InputGroup className="mb-3">
    //     //                 <InputGroup.Text id="inputGroup-sizing-sm">Mobile:</InputGroup.Text>
    //     //                 <Form.Control
    //     //                     aria-label="Defult"
    //     //                     aria-describedby="inputGroup-sizing-sm"
    //     //                 />
    //     //             </InputGroup>
    //     //             <InputGroup className="mb-3">
    //     //                 <InputGroup.Text id="inputGroup-sizing-sm">Email:</InputGroup.Text>
    //     //                 <Form.Control
    //     //                     aria-label="Defult"
    //     //                     aria-describedby="inputGroup-sizing-sm"
    //     //                 />
    //     //             </InputGroup>
    //     //             <InputGroup className="mb-3">
    //     //                 <InputGroup.Text id="inputGroup-sizing-sm">Quantity</InputGroup.Text>
    //     //                 <Form.Control
    //     //                     aria-label="Defult"
    //     //                     aria-describedby="inputGroup-sizing-sm"
    //     //                 />
    //     //             </InputGroup>
    //     //             <InputGroup className="mb-3">
    //     //                 <InputGroup.Text id="inputGroup-sizing-sm">Packing method</InputGroup.Text>
    //     //                 <Form.Control
    //     //                     aria-label="Defult"
    //     //                     aria-describedby="inputGroup-sizing-sm"
    //     //                 />
    //     //             </InputGroup>

    //     //             <InputGroup className="mb-3">
    //     //                 <InputGroup.Text id="inputGroup-sizing-sm">Port Access:</InputGroup.Text>
    //     //                 <Form.Control
    //     //                     aria-label="Defult"
    //     //                     aria-describedby="inputGroup-sizing-sm"
    //     //                 />
    //     //             </InputGroup>
    // )
//}
