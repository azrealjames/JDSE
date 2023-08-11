import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";


const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form-values', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                subject: '',
                message: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='fullName' md='2'>
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='fullName' placeholder='Name' />
                        <ErrorMessage name='fullName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='email' placeholder='Email' />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='subject' md='2'>
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='subject' placeholder='Subject' />
                        <ErrorMessage name='subject'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='message' md='2'>
                    </Label>
                    <Col md='10'>
                        <Field className='form-control' name='message' as='textarea' rows='12' placeholder='Message' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Send Message
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;