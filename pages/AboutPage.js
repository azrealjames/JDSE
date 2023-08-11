import { Col, Row, Container, Card, CardBody, CardHeader, CardTitle } from "reactstrap";


const AboutPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col>
                    <h2 className='about-title col-md-3 center'>
                        Self-Summary
                    </h2>
                    <Col>
                        <Card className='bg-light mt-3'>
                            <CardTitle tag="h5" className="">James Duran</CardTitle>
                            <CardBody>
                                <blockquote className='blockquote'>
                                    <p>
                                        I am a Denver-based software engineer with a focus on React development.
                                    </p>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;