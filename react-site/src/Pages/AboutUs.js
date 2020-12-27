import React, { Component } from 'react';
import {
    Container,
    Nav,
    Col,
    Row,
    Tab,    Button,
    Form
} from 'react-bootstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-labs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Contact</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Location</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Cooperation</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <br />
                                    <img src="https://www.robbiemaciver.com/images/mglpdir/images/general/TeamWork.jpg" alt="1" width="900" height="500" />
                                    <p>
                                        Text
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <br/>
                                    <img src="https://i.ytimg.com/vi/ogUMnnTw2y4/maxresdefault.jpg" alt="1" width="900" height="500" />
                                    <Container style={{width: '500px'}}>
                                        <h1 className="text-center">Contact Us</h1>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Email address </Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text>
                                                    We'll never share your email with anyone else
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Example text Area</Form.Label>
                                                <Form.Control as="textarea" rows="3" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="Checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit"> Submit </Button>
                                        </Form>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <br />
                                    <img src="http://cspsd.kolp.gov.spb.ru/media/220/news/18283/images/stock-photo-6.jpg" alt="1" width="900" height="500" />
                                    <p>
                                        Text
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <br />
                                    
                                    <p>
                                        Text
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <br />
                                    <img src="https://eurabota.com/uploads/photo_1520254745.jpg" alt="1" width="900" height="500" />
                                    <p>
                                        Text
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}