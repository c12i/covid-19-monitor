import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchNewsAsync } from '../../redux/news/news.actions';
import { selectNewsArticles, selectIsFetching } from '../../redux/news/news.selectors';

import ArticlePanel from '../../components/article-panel/article-panel.component';
import PlaceholderPanels from '../../components/placeholders/placeholders.component';

class NewsPage extends React.Component {
  componentDidMount() {
    const { fetchNewsAsync } = this.props;
    fetchNewsAsync();
  }

  render() {
    const { loading, articles } = this.props;
    // TODO: FIX ARTICLES
    console.log(articles);
    return (
      <div>
        <h2>News</h2>
        {
          loading ? <PlaceholderPanels rows={4} />
          : 
          <div>
            <ArticlePanel />
          </div>
        }
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  articles: selectNewsArticles,
  loading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchNewsAsync: () => dispatch(fetchNewsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);