import React from 'react';
import 'semantic-ui-css/semantic.css';

const Header = React.createClass({
  render() {
    return (
      <div className='ui fixed inverted menu'>
        <div className='ui container'>
          <a href='#' className='header item'>
            <img className='logo' src='assets/images/logo.png' />
            Project Name
          </a>
          <a href='#' className='item'>Home</a>
          <div className='ui simple dropdown item'>
            Dropdown <i className='dropdown icon'></i>
            <div className='menu'>
              <a className='item' href='#'>Link Item</a>
              <a className='item' href='#'>Link Item</a>
              <div className='divider'></div>
              <div className='header'>Header Item</div>
              <div className='item'>
                <i className='dropdown icon'></i>
                Sub Menu
                <div className='menu'>
                  <a className='item' href='#'>Link Item</a>
                  <a className='item' href='#'>Link Item</a>
                </div>
              </div>
              <a className='item' href='#'>Link Item</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Header;
