import React from 'react';
import '../styles/RoomCard.scss';

class RoomCard extends React.Component {

  render() {
    const roomHref = "/rooms/" + this.props.roomId;
    return (
      <a href={roomHref}>
        <div className="RoomCard">
          <p>{this.props.roomName}</p>
        </div>
      </a>
    );
  }
}

export default RoomCard;