import React, { Component } from 'react';
import { Container, Media, Col, Row, Card, ListGroup } from 'react-bootstrap';

export default class News extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://www.artnews.com/wp-content/uploads/2020/12/Stedelijk_Small-world_Dec-2020_PTijhuis_Y9A9681.jpg?crop=0px%2C0px%2C1200px%2C674px&resize=450%2C253"
                            />
                            <Media.Body>
                                <h5>ARTnews in Brief: Stedelijk Museum Amsterdam and Kunstmuseum Bern Make Joint Acquisition—and More from December 23, 2020</h5>
                                <p>
                                    A continually updated post of goings-on around the world.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://www.artnews.com/wp-content/uploads/2020/06/shutterstock_254642866.jpg?crop=0px%2C0px%2C1371px%2C770px&resize=450%2C253"
                            />
                            <Media.Body>
                                <h5>The Best Tie Dye Kits for Creating Exciting Designs All Year Round</h5>
                                <p>
                                    UPDATED (ORIGINALLY PUBLISHED JUNE 8, 2020 4:17 PM) If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. A popular…
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://www.artnews.com/wp-content/uploads/2020/06/shutterstock_581888965.jpg?crop=0px%2C0px%2C1800px%2C1012px&resize=450%2C253"
                            />
                            <Media.Body>
                                <h5>To Keep Your Tools in Top Shape, Look For the Best Sharpening Stones</h5>
                                <p>
                                    UPDATED (ORIGINALLY PUBLISHED JUNE 24, 2020 12:47 PM) If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. Sharp ideas…
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://www.artnews.com/wp-content/uploads/2020/12/AdobeStock_212476740.jpeg?crop=0px%2C0px%2C1500px%2C843px&resize=450%2C253"
                            />
                            <Media.Body>
                                <h5>Essential Books: Art in America Staff Picks to Read (or Reread) Now</h5>
                                <p>
                                    With the pandemic hard upon us, what better time to settle in with a few of those art books you've always meant to read but never quite got to?
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://www.artnews.com/wp-content/uploads/2020/12/best-of20202-1.jpg?crop=83px%2C0px%2C1333px%2C750px&resize=450%2C253"
                            />
                            <Media.Body>
                                <h5>The Defining Auction Records of 2020: Young Talents Rise, Old Masters Seen Anew, and More</h5>
                                <p>
                                    Work by artists such as Georges de la Tour, Matthew Wong, and Amoako Boafo realized new milestones this year.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://www.artnews.com/wp-content/uploads/2020/12/AP_967554131065.jpg?crop=0px%2C0px%2C1200px%2C674px&resize=450%2C253"
                            />
                            <Media.Body>
                                <h5>Tel Aviv Museum Chief Curator Resigns, Leicester Street Artwork Isn’t by Banksy, and More: Morning Links from December 23, 2020</h5>
                                <p>
                                    Here's what we're reading this morning.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5"> Categories </h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item> Exhibitions </ListGroup.Item>
                                <ListGroup.Item> Culture </ListGroup.Item>
                                <ListGroup.Item> Persons </ListGroup.Item>
                                <ListGroup.Item> Intresting </ListGroup.Item>
                                <ListGroup.Item> Criminal </ListGroup.Item>
                                <ListGroup.Item> Competitions </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card mt="3" bg="light">
                            <Card.Body>
                                <Card.Title> Side widget </Card.Title>
                                <Card.Text>
                                        Text example
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        );
    }
}