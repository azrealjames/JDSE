import { Col, Container, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col>
                    <h2>
                        Let's work together
                    </h2>
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>

            </Row>
        </Container>
    );
};

export default ContactPage;