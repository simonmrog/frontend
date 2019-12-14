import React from "react";

class SearchBar extends React.Component {

  constructor (props) {
    super (props);
    this.state = {search: ""};
  }

  onInputChange = (event) => {
    this.setState ({search: event.target.value}, () => {
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault ();
    this.props.onSubmit (this.state.search);
  }

  render () {  
    return (
      <div className="ui segment ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input id="input" type="text" value={this.state.search} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;