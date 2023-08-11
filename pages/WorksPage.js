import { Col, Row, Container, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import logo from '../app/assets/img/git-logo.png';

const WorksPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col>
                    <Col>
                        <Card className='bg-primary'>
                            <CardImg top width='100%' src={logo} alt="Git logo" />
                            <CardBody>
                                <CardTitle className="text-white"><p>React Developer</p><h3>James Duran</h3></CardTitle>
                                <CardText className="text-white">

                                    I am a Denver-based software engineer with a focus on React development.


                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col>
                    <Col>
                        <Card className='bg-primary'>
                            <CardImg top width='100%' src={logo} alt="Git logo" />
                            <CardBody>
                                <CardTitle className="text-white"><p>React Developer</p><h3>James Duran</h3></CardTitle>
                                <CardText className="text-white">

                                    I am a Denver-based software engineer with a focus on React development.


                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col>
                    <Col>
                        <Card className='bg-primary'>
                            <CardImg top width='100%' src={logo} alt="Git logo" />
                            <CardBody>
                                <CardTitle className="text-white"><p>React Developer</p><h3>James Duran</h3></CardTitle>
                                <CardText className="text-white">

                                    I am a Denver-based software engineer with a focus on React development.


                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default WorksPage;
