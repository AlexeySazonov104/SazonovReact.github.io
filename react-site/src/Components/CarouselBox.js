import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mainSlider1 from '../assets/images/slider0.jpg';
import mainSlider2 from '../assets/images/slider1.jpg';
import mainSlider3 from '../assets/images/slider2.jpg';
import {Button} from "react-bootstrap";

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mainSlider1}
                        alt="mainSlider1"
                        height="915"
                    />
                    <Carousel.Caption>
                        <h1>Master <b>the course</b> </h1>
                        <h2>Choose an online course and start your journey as an painter!</h2>
                        <Button variant="outline-info"> <a href="/course">Begin</a> </Button> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mainSlider2}
                        alt="mainSlider2"
                        height="915"
                    />
                    <Carousel.Caption>
                        <h2>Our <b>online</b> course</h2>
                        <h3>The program of each course is theoretical knowledge and a lot of practice.</h3>
                        <Button variant="outline-info"> <a href="/course">Begin</a> </Button> 
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={mainSlider3}
                            alt="mainSlider3"
                            height="915"
                        />
                        <Carousel.Caption>
                            <h2>Big <b>online</b> school</h2>
                            <h3>Academic program based on the practices of leading art Universities in St. Petersburg.</h3>
                            <Button variant="outline-info" height="1000"> <a href="/course">Begin</a> </Button> 
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}