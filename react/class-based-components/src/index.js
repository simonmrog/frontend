import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

   constructor (props) {
      super (props);

      this.state = {latitude: null, errorMessage: ""};
   }

   componentDidMount () {

      window.navigator.geolocation.getCurrentPosition (
         (position) => {
            this.setState ({latitude: position.coords.latitude});
         },
         (err) => {
            console.log (err);
            this.setState ({errorMessage: err.message});
         }
      );
   }

   renderContent () {

      if (this.state.errorMessage && !this.state.latitude) {
         return (
            <div>Error: {this.state.errorMessage}</div>
         );
      }
      else if (!this.state.errorMessage && this.state.latitude) {
         return (
            <SeasonDisplay lat={this.state.latitude} />
         );
      }
      else {
         return (
            <Spinner text="Place accept location request..."/>
         );
      }
   }

   render () { 

      return (<div>{this.renderContent()}</div>);
   }
}

ReactDOM.render (<App />, document.querySelector ("#root"));