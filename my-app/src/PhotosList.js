import React from 'react';

class PhotosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const albumId = this.props.match.params.albumId;
    // Викликаєте API для отримання фотографій конкретного альбому за albumId тут і оновлюєте стан
  }

  render() {
    return (
      <div>
        <h1>Фотографії</h1>
        {this.state.photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default PhotosList;
