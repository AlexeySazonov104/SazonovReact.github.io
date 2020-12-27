import React, { Component } from "react";
import {
    Navbar,
    Container,
    Nav,
    FormControl,
    Button,
    Form
} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Course from '../Pages/Course';
import News from '../Pages/News';
import Kabinet from '../Pages/Kabinet';

export default class Header extends Component
{
    render(){
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            /> <a href="/"><b>Skills</b> For Everyone</a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/aboutus"> About Us </Nav.Link>
                                <Nav.Link href="/course"> Course </Nav.Link>
                                <Nav.Link href="/news"> News </Nav.Link>
                                <Nav.Link href="/kabinet"> Account </Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info"> Search </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route exact path="/course" component={Course} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/kabinet" component={Kabinet} />
                    </Switch>
                </Router>
            </>
        );
    }
}