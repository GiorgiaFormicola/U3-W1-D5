import { Component } from "react";
import Col from "react-bootstrap/Col";

class SingleFilm extends Component {
  render() {
    return (
      <Col className="text-center mb-2 px-1">
        <img class="img-fluid" src="/assets/images/2.png" alt="movie picture" />
      </Col>
    );
  }
}
export default SingleFilm;
