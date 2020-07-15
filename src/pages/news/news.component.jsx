import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Message } from 'rsuite';

import { fetchNewsAsync } from '../../redux/news/news.actions';
import { selectNewsArticles, selectIsFetching, selectErrorMessage } from '../../redux/news/news.selectors';

import { filterNews } from '../../utils/filter-articles.utils';
import { getKey } from '../../utils/get-key.utils';

import ArticlePanel from '../../components/article-panel/article-panel.component';
import PlaceholderPanels from '../../components/placeholders/placeholders.component';

const NewsPage = ({ fetchNewsAsync, loading, articles, error }) => {
  useEffect(() => {
    fetchNewsAsync();
  }, [fetchNewsAsync]);

  return (
    <div>
      <h3 style={{textAlign: 'center', margin: '20px'}}>News</h3>
      {loading && <PlaceholderPanels rows={4} />}
      {error ? <Message type="error" description={error.message} />
        :
        filterNews(articles).map(({ source: { name }, ...otherProps  }) => (
          <ArticlePanel 
          key={getKey(name)}
          source={name} 
          {...otherProps}
          />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  articles: selectNewsArticles,
  loading: selectIsFetching,
  error: selectErrorMessage
});

const mapDispatchToProps = dispatch => ({
  fetchNewsAsync: () => dispatch(fetchNewsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);