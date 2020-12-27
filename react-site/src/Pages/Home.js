import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'
import { CardDeck, Card, Container, Button } from 'react-bootstrap';

import One from "../assets/images/grafika.jpg";
import Two from "../assets/images/vectorgrafica.jpg";
import Three from "../assets/images/3d.jpg";
import Four from "../assets/images/akvarel.jpg";
//import Five from ;
//import Six from ;
//import Seven from ;
//import Eight from ;
//import Nine from ;
//import Ten from ;

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4"> Top Course </h2>
                    <CardDeck className="m-4">
                        <Card border="primary">
                            <Card.Img
                                variant="top"
                                src={One}
                            />
                            <Card.Body>
                                <Card.Title text="primary"> Graphics </Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary" href="/course"> More detailed </Button>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img
                                variant="top"
                                src={Two}
                            />
                            <Card.Body>
                                <Card.Title text="primary"> Vector graphics </Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary" href="/course"> More detailed </Button>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img
                                variant="top"
                                src={Three}
                            />
                            <Card.Body>
                                <Card.Title text="primary"> 3D </Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary" href="/course"> More detailed </Button>
                            </Card.Body>
                        </Card>
                        <Card border="primary">
                            <Card.Img
                                variant="top"
                                src={Four}
                            />
                            <Card.Body>
                                <Card.Title text="primary"> Watercolour </Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary" href="/course"> More detailed </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}