import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text); //gonna fire off in app.js and set off the
        //searchUsers function in the scope of App.js
        this.setState({ text: '' }) //for clearing form after
    }

    onChange = (e) => { //updates component's state with form
        this.setState({ [e.target.name]: e.target.value });
        //e.target.name (which is made into a key) uses name="text" on line 24
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange} />
                    {/* input form is now attached to state above */}
                    <input type="submit" value="Search" className='btn btn-dark btn-block' />
                </form>
            </div>
        )
    }
}

export default Search