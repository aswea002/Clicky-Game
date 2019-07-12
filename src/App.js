import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends:friends,
    clickedFriends: []
  };

  
    handleSelect = id => {
      let newScore = this.state.currentScore;
      let bestScore = this.state.bestScore;
      let selected = this.state.selected;
      let message = "";
  
      
  
      // IF not already selected, update scores & message
      if (selected.indexOf(id) < 0) { 
       
        if (newScore > bestScore) {
          bestScore = newScore;
        }
        console.log(`item has been clicked`);
  
        // Push new id onto the'selected' array
        this.state.selected.push(id);
      } else {
        newScore = 0;
        selected = [];
        message = "Already selected!";
        console.log(`item has been clicked`);
      }
  
      // update state
      this.setState({
        currentScore: newScore,
        bestScore: bestScore,
        message: "Score!",
        selected: selected,
        friends:friends.shuffle(friends)
      });
    };

  clickCharacter = id => {
    console.log("clickCharacter");
    console.log(id);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });

    //if id has been clicked previously restart counter and empty array, else award a point and save id number into array
    //  if(clickedFriends)

    
  };
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clickCharacter={this.clickCharacter}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
