import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 constructor() {
    super()
    this.state = {
      friends: [
      {
        picture: "http://http.cat/200",
        name: 'Aaron',
        favoriteColor: 'Yellow'
      }
      ],
      picture: '',
      name:'',
      favoriteColor: '',
    };
    
 };

 updatePicture(value) {
    this.setState({
      picture: value,
    });
  };

 updateName(value) {
    this.setState({
      name:value
    });
  };
  updateFavoriteColor(value) {
    this.setState({
      favoriteColor:value
    });
  };
  addFriend(value){
    console.log(value);
    this.setState({
      picture: '',
      name: '',
      favoriteColor: '',
    
      friends: [...this.state.friends, {
          picture: this.state.picture,
          name: this.state.name,
          favoriteColor: this.state.favoriteColor
      }],
    });
  };

 render() {
    
   return (
      <div className="App">
       picture:
       <input onChange={event => this.updatePicture(event.target.value)}
       value={this.state.picture}/>
       Name:
       <input onChange={event => this.updateName(event.target.value)}
       value={this.state.name}/>
       Favorite Color:
       <input onChange={event => this.updateFavoriteColor(event.target.value)}
       value={this.state.favoriteColor}/>
       <button onClick={event=>this.addFriend(event.target.value)}>Add Friend</button>
       <ul>
         {this.state.friends.map(friend => (
           <div>
             <img src={friend.picture} width="100px"/>
             Name: {friend.name} <br/>
             Favorite Color: {friend.favoriteColor}
           </div>
         ))}
       </ul>
      state:{ JSON.stringify(this.state)}
        
      </div>
    );
  }

};
export default App;