import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
  render() {
    return (
      <div className='support card'>
        <div className="card-header bg-primary text-white">
          <strong>Channels</strong>
        </div>
        <div className="card-body channels">
          <ChannelList {...this.props}/>
          <ChannelForm {...this.props}/>
        </div>
      </div>
    )
  }

}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default ChannelSection
