import { Component } from "react";

import Row from "react-bootstrap/Row";
import SingleFilm from "./SingleFilm";

class FilmsSection extends Component {
  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <SingleFilm></SingleFilm>
          <SingleFilm></SingleFilm>
          <SingleFilm></SingleFilm>
          <SingleFilm></SingleFilm>
          <SingleFilm></SingleFilm>
          <SingleFilm></SingleFilm>
        </Row>
      </>
    );
  }
}

export default FilmsSection;
