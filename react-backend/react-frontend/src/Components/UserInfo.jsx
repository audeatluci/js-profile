import React from 'react';

// const UserInfo = ({ match, ...params }) => (
//   <div>
//     <h3>Hey {match.params.userId} {JSON.stringify(params)}</h3>
//   </div>
// )

class UserInfo extends React.Component {
  state = {hasLoaded: false};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return fetch(`/users/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(user => this.setState( ...user ));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Hey {this.state.name} {this.state.lastName}!</h3>
        <hr />
        <h4>Details</h4>
        <ul>
          <li>Username: {this.state.username}</li>
          <li>Age: {this.state.age}</li>
        </ul>
      </div>
    )
  }
}

export default UserInfo;