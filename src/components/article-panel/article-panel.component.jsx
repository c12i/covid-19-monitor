import React from 'react';

import { Panel, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './article-panel.styles';

const ArticlePanel = ({ source, title, description, url, publishedAt }) => {
  const date = new Date(publishedAt);
  return (
  <Panel style={{ marginBottom: '10px' }} key={source} bordered>
    <h3>{title}</h3>
    <p>{description}... <a href={url}>Continue reading</a></p>
    <br />
    <small>
      <Key>{source}</Key> 
      <Divider vertical />
      {date.toDateString()}
    </small>
  </Panel>
)};

export default ArticlePanel;