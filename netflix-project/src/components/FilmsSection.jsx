import { Component } from "react";
import Row from "react-bootstrap/Row";
import SingleFilm from "./SingleFilm";
// const key = "14895418";

class FilmsSection extends Component {
  state = {
    searchURL: `http://www.omdbapi.com/?apikey=14895418&s=${this.props.searchString}`,
    searchArray: [],
  };

  getFilms = () => {
    fetch(this.state.searchURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the films list");
        }
      })
      .then((searchObject) => {
        console.log(searchObject.Search);
        this.setState({
          ...this.state,
          searchArray: searchObject.Search,
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <>
        <h4>The {this.props.searchString} Saga</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4">
          {this.state.searchArray.slice(0, 6).map((film) => {
            return <SingleFilm key={film.imdbID} filmSrc={film.Poster} filmTitle={film.Title}></SingleFilm>;
          })}
        </Row>
      </>
    );
  }
}

export default FilmsSection;
