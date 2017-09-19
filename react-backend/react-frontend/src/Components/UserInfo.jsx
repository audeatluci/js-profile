import React from 'react';

const UserInfo = ({ match }) => (
  <div>
    <h3>Hey {match.params.userId} {this.props} {JSON.stringify(match)}</h3>
  </div>
)

export default UserInfo;