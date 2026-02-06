import { Component } from "react";
import Col from "react-bootstrap/Col";

class SingleFilm extends Component {
  render() {
    return (
      <Col className="text-center mb-2 px-1">
        <img className="img-fluid" src={this.props.filmSrc} alt={this.props.filmTitle} />
      </Col>
    );
  }
}
export default SingleFilm;
