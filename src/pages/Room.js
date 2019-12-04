import React from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

class Room extends React.Component {

  componentDidMount() {
    if (!Cookies.get('_session')) this.props.history.push('/');
    console.log(this.props.match.params.id);
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
        {params.id && <p>{params.id}</p>}
      </div>
    );
  }
}

export default withRouter(Room);