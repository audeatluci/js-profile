import React from 'react';

const UserInfo = ({ match }) => (
  <div>
    <h3>Hey {match.params.userId}</h3>
  </div>
)

export default UserInfo;