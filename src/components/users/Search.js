import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    }

    onChange = (e) => { //updates component's state with form
        this.setState({ [e.target.name]: e.target.value });
        //e.target.name (which is made into a key) uses name="myText" on line 19
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