import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import API from "../api/unsplash";

class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = { images: [] };
  } 

  onSearchSubmit = (search) => {

    API.getArticles (search)
      .then ((response) => {
        let data = response.data.results;
        this.setState ({images: data});
      })
      .catch ((err) => {
        alert (err);
      });
  }

  render () {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;