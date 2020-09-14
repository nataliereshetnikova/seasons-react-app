import React, { Component } from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       lat: null,
  //       errorMessage: "",
  //     };
  //   }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
    console.log("component rendered on the screen");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  renderContent(){
    if (this.state.lat && this.state.errorMessage === "") {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else if (!this.state.lat && this.state.errorMessage !== "") {
      return <div>Error: {this.state.errorMessage} </div>;
    } else {
      return (
        <div className='ui active dimmer'>
          <div className="ui big text loader">Please accept the location request</div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>);
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
