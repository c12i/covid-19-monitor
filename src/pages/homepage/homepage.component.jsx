import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAsync } from '../../redux/all/all.actions';

import Jumbotron from '../../components/jumbotron/jumbotron.component'

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchAllAsync } = this.props;
    fetchAllAsync();
  }

  render() {

    return (
      <div>
        <Jumbotron />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  fetchAllAsync: () => dispatch(fetchAllAsync())
});

export default connect(null, mapDispatchToProps)(HomePage);
