import React from 'react';
import { connect } from 'react-redux';

const Sidebar = ({ users }) => (
  <div>
    <h3>Users</h3>
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  </div>
);


const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Sidebar);
