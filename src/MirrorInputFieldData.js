import React, { Component } from "react";

class MirrorInputFieldData extends Component {

  constructor() {
    super();

    this.state = {
      inputText: ''
    };

  }

  updateInputData = (inputData) => {
    this.setState(() => ({
      inputText: inputData.trim()
    }));
  }

  render() {
    return (
      <div className="container">
        <input type="text" placeholder="Say Something" onChange={(event) => this.updateInputData(event.target.value)} />
        <p className="echo">Echo:</p>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default MirrorInputFieldData;