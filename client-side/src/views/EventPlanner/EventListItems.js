
import React from "react";
import axios from 'axios'
// nodejs library that concatenates classes


// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter";


class EventListItems extends React.Component {
  state = {
        events: []
    }
    
    // componentDidMount() {
    //     console.log('event component')
    //     let token = localStorage.getItem('mernToken')
    //     // console.log('TOOOKKKKKEEEENNN; ', token)
    //     axios.get(`http://localhost:3000/event/`, {
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //     .then(response => {
    //         // console.log('get response', response.data)
    //         this.setState({events: response.data})
    //     })
    //     .catch(err => {
    //         console.log('Event Error', err)
    //     })
    // }
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
      <div>
        <h1>{allEvents}</h1>
       
      </div>
    );
  }
}

export default EventListItems;
