import React from "react";
import "./Card.css";

/*
The Card component should render markup matching the design.html: 
    a div with a class of 'Card' containing an h3 for the card's title and 
    a p element for the card's content.

The Card component accepts 2 props: title and content.
    title is a string of the card's title.
    content is a string of the card's content.
    These props will be passed in for each Card from the List component.

    ======= SAMPLE =======
      {FROM THIS: /*} <button type="button">delete</button>
      <button onClick={() => props.onCheckItem(props.item)} type="button">
        check
      </button>
*/

//class Card extends React.Component {
export default function Card(props) {
  // WHY DID I HAVE TO CHANGE THIS TO A FUNCTION?
  // render() {
  return (
    <div className="Card">
      <button type="button" onClick={() => props.onClickDelete(props.id)}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
//}

Card.propsTypes = {
  onClickDelete: () => {}
};

//export default Card;
