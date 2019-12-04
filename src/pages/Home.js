import React from 'react';
import RoomCard from '../components/RoomCard';
import '../styles/Home.scss';
import Cookies from 'js-cookie';

const testRooms = [
  {
    roomName: 'Room1',
    roomId: '1'
  },
  {
    roomName: 'Room2',
    roomId: '2'
  }
];

class Home extends React.Component {

  removeCookies = () => {
    Cookies.remove('_session');
  }

  render() {
    return (
      <div className="container">
        {testRooms.map((room) => (
          <RoomCard key={room.roomId} roomName={room.roomName} roomId={room.roomId} />
        ))}
        <button onClick={this.removeCookies}>Remove session cookies</button>
      </div>
    );
  }
}

export default Home;