import React from "react";
import axios from 'axios'

import { Container, Row, Col } from "reactstrap";

import NewEvents from "./NewEvents"
import EventListItems from "./EventListItems"

import SimpleFooter from "components/Footers/SimpleFooter";
class Events extends React.Component {
      state = {
        events: []
    }
    
    componentDidMount() {
        console.log('event component')
        let token = localStorage.getItem('mernToken')
        console.log('TOOOKKKKKEEEENNN; ', token)
        axios.get(`http://localhost:3000/event/`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            // console.log('get response', response.data)
            this.setState({events: response.data})
        })
        .catch(err => {
            console.log('Event Error', err)
        })
    }

        
    render() {
        let allEvents = (this.state.events || []).map((r,i) => {
            // return <h1>hello</h1>
            return <EventListItems 
                key={i}
                result={r} //named it this instead
                user={this.props.user}
            />

        })

        return (
            <main>

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

                            <NewEvents /> 
                  
                            <div className="btn-wrapper">
                            {this.props.result}
                        </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <hr />
                        {allEvents}
                        
                        </Col>
                        </Row>
                        </div>
                    </Container>
                </section>
                </div>
                <SimpleFooter />
            </main>
        );
    }       
}

export default Events;