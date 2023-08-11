import { Col, Row, Container, Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import logo from '../app/assets/img/git-logo.png';


const HomePage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col>
                    <Col>
                        <Card className='bg-primary'>
                            <CardImg top width='100%' src={logo} alt="Git logo" />
                            <CardBody className='text-center'>
                                <CardTitle className="text-white"><p>React Developer</p><h3>James Duran</h3></CardTitle>
                                <CardText className="text-white">
                                    I am a Denver-based software engineer with a focus on React development.
                                </CardText>
                                <Col className="text-center">
                                    <h5 className="text-white">Social</h5>
                                    <a
                                        className='btn btn-social-icon btn-instagram'
                                        href='https://github.com/azrealjames/'
                                    >
                                        <i class="fa fa-github fa-xs"></i>
                                    </a>{' '}
                                    <a
                                        className='btn btn-social-icon btn-instagram'
                                        href='http://instagram.com/azrealjames/'
                                    >
                                        <i class="fa-brands fa-instagram fa-beat-fade"></i>
                                    </a>{' '}
                                    <a
                                        className='btn btn-social-icon btn-facebook'
                                        href='http://www.facebook.com/'
                                    >
                                        <i className='fa fa-facebook' />
                                    </a>{' '}
                                </Col>
                                <Col className='text-center'>
                                    <a
                                        role='button'

                                        href='tel:+17202510866'
                                    >
                                        <i className='fa fa-phone' /> 1-720-251-0866
                                    </a>
                                    <br />
                                    <a
                                        role='button'

                                        href='mailto:azrealjames@gmail.com'
                                    >
                                        <i className='fa fa-envelope-o' /> azrealjames@gmail.com
                                    </a>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;