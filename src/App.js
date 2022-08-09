import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/users/Search'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false //true if fetch is still processing and spinner is going
    //false if the data has been fetched and has arrived from api
  }
  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App