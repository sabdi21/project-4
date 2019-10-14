
import React from "react";
import axios from 'axios'

// reactstrap components
import { CardBody, Card, Button} from "reactstrap";

class EventListItems extends React.Component {
    state={
        attendingEvents: []
    }

handleSaveEvent = (e) => {
    e.preventDefault()
    console.log('save event works')
    console.log('user info passed', this.props.user)
    // post to /
}

  render() {
    console.log(this.props.result)
    return ( 
      <div className="e">
      <Card className="shadow">
        <CardBody className="event-cards">
            <h1>{this.props.result.eventname}</h1>
            <h2>{this.props.result.date}</h2>
            <h2>{this.props.result.time}</h2>
            <h2>{this.props.result.location}</h2>
            <h2>{this.props.result.description}</h2>
                <Button
                      className="my-4"
                      color="primary"
                      type="submit"
                      onClick={this.handleSaveEvent}
                    > Save Event </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EventListItems;
