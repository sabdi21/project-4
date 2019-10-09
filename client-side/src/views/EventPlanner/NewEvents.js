/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
// import {  Container, Row, Col } from "reactstrap";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import ReactDatetime from "react-datetime";
import axios from 'axios'
import moment from "moment";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter";



class NewEvents extends React.Component {
    state = {
        eventname: '',
        date: '',
        time: '',
        location: '',
        description: ''
    }
    handleDate = (date) => {
        this.setState({ date: date })
    }
    handleSubmit = (e) => {
        console.log('something was submitted', this.state)
        // let token = localStorage.getItem('mernToken')
        e.preventDefault()

        axios.post(`http://localhost:3001/event/new`, this.state, {
            // headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            // console.log('ERROR', err.response.data.message)
        })
        
        // console.log('this is the state', this.state)
    }
    render() {
        const today = new Date();
        today.setDate(today.getDate() + 1);

        return (
            <>
            <DemoNavbar />
            <main ref="main">
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    </div>
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                        <Row>
                        <Col lg="6">
                            <h1 className="display-3 text-white">

                            <span>Create an Event!</span>
                            </h1>
                            <form className="event-form" onSubmit={this.handleSubmit}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="fa fa-user-circle" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Event Title..." type="eventname" name="eventname" onChange={(e) => this.setState({ eventname: e.target.value})}/>
                                    </InputGroup>
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="fa fa-location-arrow" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Location" type="location" name="location" onChange={(e) => this.setState({ location: e.target.value})}/>
                                    </InputGroup>
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Time" type="time" name="time" onChange={(e) => this.setState({ time: e.target.value})}/>
                                    </InputGroup>
                                </FormGroup>

                                <FormGroup className="focused">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                        </InputGroupText>
                                        </InputGroupAddon>
                                        <ReactDatetime
                                        // inputProps={{
                                        //     placeholder: " Event Date"
                                        // }}
                                        type="date"
                                        name="date"
                                        selected={this.state.startDate}
                                        onChange={date => this.handleDate(date)}
                                        timeFormat={false}
                                        />
                                    </InputGroup>
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="fa fa-pencil-square-o" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Event description" type="description" onChange={(e) => this.setState({ description: e.target.value})}/>
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="primary"
                                    type="submit"
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </Button>
                                </div>
                            </form>
                            <div className="btn-wrapper">

                            </div>
                        </Col>
                        </Row>
                        </div>
                    </Container>
                </section>
                </div>
            </main>
            <SimpleFooter />
        </>
        );
    }
}

export default NewEvents;