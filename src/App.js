import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Search from './components/users/Search'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import './App.css'

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false, //true if fetch is still processing and spinner is going
    //false if the data has been fetched and has arrived from api
    alert: null
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
  searchUsers = async queryText => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${queryText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false }); ///res.data.items only for 
    //search result
  }

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
    //sets alert back to null after 5 seconds
  }

  //Get single Github user
  getUser = async (userName) => {
    this.setState({ loading: true }); //loading while fetching data

    //the endpoint we want is users/userName
    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  }

  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }

  render() {
    const { users, user, loading } = this.state

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                path='/'
                element={(
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route path='/about' element={<About />} />
              <Route path={'/user/:login'} element={(
                <User getUser={this.getUser} user={user} loading={loading} />
              )} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

export default App