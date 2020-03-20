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
    const filteredArticles = articles.filter(({ title }) => 
      title.toLowerCase().includes('coronavirus' || 'covid-19' || 'covid19' || 
                                   'virus' || 'outbreak' || 'pandemic'))
    return (
      <div>
        <h3 style={{textAlign: 'center', margin: '20px'}}>News</h3>
        {
          loading ? <PlaceholderPanels rows={4} />
          : 
          filteredArticles.map(({ source: { name }, title, description, url, publishedAt  }) => (
            <ArticlePanel 
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