import React from "react";

class SearchBox extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      term: ""
    };
  }

  onInputChange = (event) => {

    this.setState ({term: event.target.value});
  }

  onFormSubmit = (event) => {

    event.preventDefault ();
    this.props.onFormSubmit (this.state.term);
  }

  render () {
    return (
      <div className="ui segment search-box">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;