
import React from "react";
// nodejs library that concatenates classes


// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter";


class Landing extends React.Component {
  state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        profileUrl: ''
    }

  render() {
    return (
      <>
      {/* <DemoNavbar updateUser={this.getUser} user={this.state.user}/> */}
      <main ref="main">
        <div className="position-relative">
          {/* shape Hero */}
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
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
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

export default Landing;
