import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchNewsAsync } from '../../redux/news/news.actions';
import { selectNewsArticles, selectIsFetching } from '../../redux/news/news.selectors';

import { filterNews } from '../../utils/filter-articles.utils';
import { getKey } from '../../utils/get-key.utils';

import ArticlePanel from '../../components/article-panel/article-panel.component';
import PlaceholderPanels from '../../components/placeholders/placeholders.component';

const NewsPage = ({ fetchNewsAsync, loading, articles }) => {
  useEffect(() => {
    fetchNewsAsync();
  }, [fetchNewsAsync]);

  return (
    <div>
      <h3 style={{textAlign: 'center', margin: '20px'}}>News</h3>
      {
        loading ? <PlaceholderPanels rows={4} />
        : 
        filterNews(articles).map(({ source: { name }, title, description, url, publishedAt  }) => (
          <ArticlePanel 
          key={getKey(name)}
          source={name} 
          title={title} 
          description={description} 
          url={url} 
          publishedAt={publishedAt} 
          />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  articles: selectNewsArticles,
  loading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchNewsAsync: () => dispatch(fetchNewsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);