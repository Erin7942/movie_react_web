import React, { Component } from "react";
import PropTypes from "prop-types";
//import "./App.css";
//import Movie from "./Movie";
 
const key = "013b5800501fbc9d95e5f9d0629987d4";
 
const getDate = new Date();
const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
getDate.setTime(yDate);
var yYear = getDate.getFullYear();
var yMonth = getDate.getMonth() + 1;
var yDay = getDate.getDate() - 1;
 
if (yMonth < 10) {
  yMonth = "0" + yMonth;
}
if (yDay < 10) {
  yDay = "0" + yDay;
}
const resultDate = yYear + "-" + yMonth + "-" + yDay;
 
const res = resultDate.slice(0, 10).replace(/-/g, "");
 
class App1 extends Component {
  state = {};
 
  componentDidMount() {
    this._getMovies();
  }
 
  _renderMovies = () => {
    const movies = this.state.movies.map((dailyBoxOfficeList, index) => {
      return (
        <Movie
          rank={dailyBoxOfficeList.rank}
          movieNm={dailyBoxOfficeList.movieNm}
          key={index}
        />
      );
    });
    return movies;
  };
 
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };
 
  _callApi = () => {
    return fetch(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${20120101}&itemPerPage=10"
    )
      .then(a => a.json())
      .then(json => json.boxOfficeResult.dailyBoxOfficeList)
      .catch(err => console.log(err));
  };
 
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : "로딩중 ..."}
      </div>
    );
  }
}
 
function Movie({ rank, movieNm }) {
    return (
      <div className="Movie">
        <h1>
          {rank}위:{movieNm}
        </h1>
      </div>
    );
  }
   
  Movie.propTypes = {
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired
  };


export default App1;