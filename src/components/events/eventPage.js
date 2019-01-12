import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import * as eventActions from '../../actions/eventActions';
import SuccessPage from '../success/successPage';


class EventPage extends React.Component {


  render () {
    return (
      <div>
        Event Form
      </div>
    );
  }
}

EventPage.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);