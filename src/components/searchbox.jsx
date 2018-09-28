import React, { Component } from "react";
class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ps b--green bg--lightest-blue"
          type="search"
          placeholder="search robot"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
