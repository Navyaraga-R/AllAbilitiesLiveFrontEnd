import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Carousel from 'nuka-carousel';
import Navbar from "./Navbar";
import Events from './Events';
import Footer from "./Footer";

const fetchMovies = "https://cdn.jwplayer.com/v2/playlists/Stit4YxF";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  //Fetching events 
  componentDidMount() {
    fetch(fetchMovies)
      .then(response => response.json())
      .then((data) => {
        let movies = data.playlist;
        movies.map((movie) => {
          return movie;
        })
        this.setState({ movies: movies, isLoading: false })
      })
  }
  render() {

    return (
      <div className="main_container">
        <section>
          <Navbar />
        </section>
        <section>
          <div className="home_image_carousel">
            <Carousel>
              <img src="https://via.placeholder.com/1280X250/d3abab/c0392b/&text=slide1" />
              <img src="https://via.placeholder.com/1280X250/ffffff/c0392b/&text=slide2" />
              <img src="https://via.placeholder.com/1280X250/ffffff/c0392b/&text=slide3" />
              <img src="https://via.placeholder.com/1280X250/ffffff/c0392b/&text=slide4" />
              <img src="https://via.placeholder.com/1280X250/ffffff/c0392b/&text=slide5" />
              <img src="https://via.placeholder.com/1280X250/ffffff/c0392b/&text=slide6" />
            </Carousel>
          </div>
        </section>
        <section>
          <div className="events_heading_1">
            <Events />
          </div>
          <div className="events_carousel_1">
            {/* {myList} */}
          </div>
          <div className="events_heading_1">
            {/* <h4>Replays</h4> */}
          </div>
        </section>

        <section>
          <div>
            <Footer />
          </div>
        </section>

      </div>
    );
  }
}

export default Home
