import React from "react";
import API from "./API";
import Loading from "./Loading";

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      users: [],
      loading: false
    };

    this.handleButton = this.handleButton.bind (this);
  }

  processData () {

    this.setState ({loading: true});

    API.getData (3)
    .then ((response) => {
    this.setState ({loading: false});      
      return (response.json ());
    })
    .then ((data) => this.setState ({users: this.state.users.concat (data.results)}))
    .catch ((err) => console.log (err));
  }

  getContent () {

    const {loading, users} = this.state;

    const list = users.map (
      (user, index) => 
      <div key={user.id.value}>
        <h3>{(index + 1) + ". " + user.name.first}</h3>
        <p>{user.email}</p>
        <p>{user.cell}</p>
        <hr />
      </div>
    );

    const content = loading ? <Loading /> : list; 

    return (content);
  }

  handleButton () {
    this.processData (); 
  }

  componentWillMount () {
    this.processData ();
  }

  render () {

    return (
      <div className="app">
        {this.getContent ()}
        <button onClick={this.handleButton}>More users</button>
      </div>
    );
  } 
}

export default App;