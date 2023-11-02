import React from 'react';
import { Link } from 'react-router-dom';

class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    // Викликаєте API для отримання списку альбомів конкретного користувача за userId тут і оновлюєте стан
  }

  render() {
    return (
      <div>
        <h1>Альбоми</h1>
        {this.state.albums.map(album => (
          <div key={album.id}>
            <p>{album.title}</p>
            <Link to={`/photos/${album.id}`}>Photos</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default AlbumsList;
