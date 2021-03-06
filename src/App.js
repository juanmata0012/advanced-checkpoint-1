import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import {connect} from 'react-redux';
import {loadMyMovieList} from "./actions";

class App extends Component {

  componentDidMount() {
    this.props.loadMyMovieList();
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          {/*  <Navigation>   */}
          <Navigation />
          {/*  </Navigation>   */}
          <SearchBoxContainer />
          {/*  <UserProfile>   */}
          <UserProfile />
          {/*  </UserProfile>   */}
        </header>
        <Hero />
        <TitleList
          title="Search Results"
          movies={this.props.searchResults} />
        <TitleList
          title="My Movies"
          movies={this.props.myMovieList} />
      </div>
    );
  }
}

App.propTypes = {
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array
};

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: function (movie) {
      dispatch(loadMyMovieList(movie));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
