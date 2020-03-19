import React from 'react';
import { connect } from 'react-redux';

import { fetchNewsAsync } from '../../redux/news/news.actions';

class NewsPage extends React.Component {
  componentDidMount() {
    const { fetchNewsAsync } = this.props;
    fetchNewsAsync();
  }

  render() {
    return (
      <div>
        <h1>Hello News</h1>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
    fetchNewsAsync: () => dispatch(fetchNewsAsync())
});

export default connect(null, mapDispatchToProps)(NewsPage);