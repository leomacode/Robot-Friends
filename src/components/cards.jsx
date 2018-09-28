import React, { Component } from "react";
import Card from "./card";
class Cards extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {cards.map(card => (
          <Card
            key={card.id}
            name={card.name}
            email={card.email}
            username={card.username}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
