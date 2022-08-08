import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false //when fetching data, it will be loading:true
    //that way in our UI, we can say if the data isnt loaded, then lets show a loading spinner.
  }

  //to make HTTP request to api, need to use componentDidMount() to initialize/make request 
  //& Axios to do fetch     npm i axios
  async componetDidMount() {
    this.setState({ loading: true });

    const res = await axios
      .get('https://api.github.com/users/v3');

    this.setState({ users: res.data, loading: false }) //we get data at this point,
      //then make loading false again

      (console.log(res.data)); //github API
  }
  // render() is a lifecycle method and runs at a certain point when the component is
  //loaded. It renders the output and is **REQUIRED.
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
