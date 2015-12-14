import React from 'react';
import 'semantic-ui-css/semantic.css';
import DateTime from 'react-datetime-halkeye';
import 'react-datetime-halkeye/css/react-datetime.css';

const NewSession = React.createClass({
  getInitialState() {
    return { pickerOpen: false };
  },
  toggleStartTimePicker() {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  },

  render() {
    return (
      <div className='ui text container'>
        <div className='ui one column grid'>
          <div className='column'>
            <h1 className='ui header'>Create new game</h1>
            Pick a start and end time for the random draw to happen.
            <div className='ui form'>
              <div className='field'>
                <label>Draw/Roulette Time</label>
                <button className='ui labeled icon button' onClick={this.toggleStartTimePicker}>
                  <i className='calendar icon'></i>
                  Start Time
                </button>
                <DateTime input={false} open={this.state.pickerOpen}
                  dateFormat timeFormat inputProps={{ autoComplete: false }} />
              </div>
              <div className='field'>
                <label>Last Name</label>
                <input type='text' name='last-name' placeholder='Last Name' />
              </div>
              <div className='field'>
                <div className='ui checkbox'>
                  <input type='checkbox' tabIndex='0' className='hidden' />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button className='ui button' type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default NewSession;

