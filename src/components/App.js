import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
      console.log(this.props)
    return(
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;