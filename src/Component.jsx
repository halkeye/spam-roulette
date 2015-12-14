import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'react-router';

const Component = React.createClass({
  onJoinClick() {
    alert('join?');
  },

  render: function () {
    return (
      <div className='ui text container'>
        <div className='ui one column grid'>
          <div className='column'>
            <h2 className='ui center aligned icon header'>
              <p>Welcome to</p>
              <i className='circular users icon'></i>
              <p>Spam Roulette</p>
              <div className='ui buttons'>
                <Link to='/new'><button className='ui violet button'>New Session</button></Link>
                <div className='or'></div>
                <button onClick={this.onJoinClick} className='ui positive button'>Join Session</button>
              </div>
            </h2>
          </div>
        </div>
      </div>
    );
  }
});

export default Component;
