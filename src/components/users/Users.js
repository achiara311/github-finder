import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (//map is a high order array method that takes a function/callback function
            //function has a parameter that represents each user called user
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} /> //user prop from UserItem line 7
                    //passing userdetails (login, avatar_url, html_url link) in as a prop into UserItem
                ))}</div>
        );
    }

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users