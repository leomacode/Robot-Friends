import React, { Component } from "react";
class Card extends Component {
  render() {
    const { name, email, username } = this.props;

    return (
      <div className="tc bg-light-green dib br3 ps3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${username}}?200x200`} alt="Robot" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
