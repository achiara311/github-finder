import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component {


    render() {
        return (//map is a high order array method that takes a function/callback function
            //function has a parameter that represents each user called user
            <div style={userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user} /> //myUser prop from UserItem line 7
                    //passing user in as a prop into UserItem
                ))}</div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users