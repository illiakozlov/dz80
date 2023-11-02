import React from 'react';
import { Link } from 'react-router-dom';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // Викликаєте API для отримання списку користувачів тут і оновлюєте стан
  }

  render() {
    return (
      <div>
        <h1>Список користувачів</h1>
        {this.state.users.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <Link to={`/albums/${user.id}`}>Album</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
