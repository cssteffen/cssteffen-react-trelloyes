/**
The App component should render markup matching the design.html: 
the main element, a header with the h1 and a div with class 'App-list'.
    
The App component will accept 1 prop, store.
    The store prop is an object with 2 keys: lists and allCards.
    lists is an array of objects.
    allCards is an object where each key is a card's ID and the value is the card object with a title and content.
    You'll be given a dummy STORE object to pass to your App.
    
The App should render a List component for each of the items in 
the store.lists array.
    
Each instance of the List component should be passed 2 props (and a key). 
The 2 props are header and cards.
      The header prop is a string for the List's header.
      The cards prop will be an array of card objects.
      You'll need to combine the cardIds array for the list 
      with the allCards object.
 */

import React from "react";
import List from "./List";
import "./App.css";
import STORE from "./store";

/* ==== SAMPLE ===== 
  handleCheckItem = item => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      shoppingItems: newItems
    });
  };
  =========================*/

const newRandomCard = () => {
  const id =
    Math.random()
      .toString(36)
      .substring(2, 4) +
    Math.random()
      .toString(36)
      .substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: `lorem ipsum`
  };
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}
/*Example
  const objectWithKVPs = {
    key: 'value',
    foo: 'foo value',
    bar: 'bar value',
    abc: {nested: 'object'}
  }

  //to remove the foo key value pair
  const newObjectWithKVPs = omit(objectWithKVPs, 'foo');
  */

class App extends React.Component {
  //refactor to use state for the store rather than props
  state = {
    store: STORE
  };

  /*static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };*/

  handleDeleteCard = cardId => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    });
  };

  handleAddCard = listId => {
    const newCard = newRandomCard();

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    });
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    });
  };

  render() {
    const { store } = this.state; //managing STORE data
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id} //why did we need to add this for state?
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} //finds id for which card to pull
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
